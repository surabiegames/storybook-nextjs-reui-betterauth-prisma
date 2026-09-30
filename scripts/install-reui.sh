#!/usr/bin/env bash
set -euo pipefail

STYLE="$(node -p "require('./components.json').style")"
SRC="${TMPDIR:-/tmp}/reui-src"

# 1. Ambil & build registry ReUI di luar proyekmu
[ -d "$SRC" ] || git clone --depth 1 https://github.com/keenthemes/reui.git "$SRC"
(cd "$SRC" && pnpm install && pnpm registry:build)

# 2. Ambil daftar nama untuk style-mu
DIR="$SRC/public/r/styles/$STYLE"
if [ ! -d "$DIR" ]; then
  echo "Style '$STYLE' tidak ditemukan. Style yang tersedia:"
  ls "$SRC/public/r/styles"
  exit 1
fi
ls -1 "$DIR" | grep -E '^c-.*\.json$' | sed 's/\.json$//' > reui-names.txt
echo "Total item: $(wc -l < reui-names.txt)"

# 3. Pasang per batch 25 item, catat yang gagal
rm -f reui-gagal.txt batch_*
split -l 25 reui-names.txt batch_
for f in batch_*; do
  pnpm dlx shadcn@latest add -y $(sed 's#^#@reui/#' "$f") || echo "$f" >> reui-gagal.txt
done
rm -f batch_*
[ -f reui-gagal.txt ] && echo "Batch gagal ada di reui-gagal.txt" || echo "Semua batch berhasil"