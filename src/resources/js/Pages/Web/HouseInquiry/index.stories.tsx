import { Meta, StoryObj } from '@storybook/react';
import { HouseInquiry } from '.';

const meta: Meta<typeof HouseInquiry> = {
  title: 'views/Web/HouseInquiry',
  component: HouseInquiry,
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
