import { Meta, StoryObj } from '@storybook/react';
// import { waitFor, within } from '@storybook/testing-library';
import { SearchArea } from '.';

const meta: Meta<typeof SearchArea> = {
  title: 'components/SearchArea',
  component: SearchArea,
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
