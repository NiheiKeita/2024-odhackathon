import { Meta, StoryObj } from '@storybook/react';
import { Line } from '.';

const meta: Meta<typeof Line> = {
  title: 'views/Web/Search/components/HouseModal/components/Line',
  component: Line,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  play: async ({ canvasElement }) => {
    // const canvas = within(canvasElement)
    // await waitFor(async () => {
    //   canvas.getByText("QuestionListView")
    // })
  },
}
