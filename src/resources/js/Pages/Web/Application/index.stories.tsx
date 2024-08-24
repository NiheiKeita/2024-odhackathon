import { Meta, StoryObj } from '@storybook/react';
import { Application } from '.';

const meta: Meta<typeof Application> = {
  title: 'views/Web/Application',
  component: Application,
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
