import type { Meta, StoryObj } from "@storybook/nextjs-vite"

import { Pattern } from "@/components/examples/c-event-calendar-3"

const meta = {
  title: "ReUI/Event Calendar/03",
  component: Pattern,
  parameters: { layout: "padded" },
} satisfies Meta<typeof Pattern>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}