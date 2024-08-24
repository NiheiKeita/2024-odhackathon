import { Meta, StoryObj } from '@storybook/react';
// import { waitFor, within } from '@storybook/testing-library';
import { Search } from '.';

const meta: Meta<typeof Search> = {
  title: 'views/Web/Search',
  component: Search,
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
