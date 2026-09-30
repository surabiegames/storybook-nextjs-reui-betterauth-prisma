import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Pattern } from "@/components/examples/c-command-6"

const meta = {
  title: "ReUI/Command/06",
  component: Pattern,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Pattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}