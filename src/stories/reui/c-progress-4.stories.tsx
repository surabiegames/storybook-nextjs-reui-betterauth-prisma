import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { BaseProgressStatus } from "@/components/examples/c-progress-4"

const meta = {
  title: "ReUI/Progress/04",
  component: BaseProgressStatus,
  parameters: { layout: "padded" },
} satisfies Meta<typeof BaseProgressStatus>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}