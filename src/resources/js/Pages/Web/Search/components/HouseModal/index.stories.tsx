import { Meta, StoryObj } from '@storybook/react';
// import { waitFor, within } from '@storybook/testing-library';
import { HouseModal } from '.';

const meta: Meta<typeof HouseModal> = {
  title: 'views/Web/Search/components/HouseModal',
  component: HouseModal,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render() {
    return (
      <HouseModal
        isOpen={true}
        onClose={() => console.log("s")}
        selectHouse={{ id: 1, name: "Item 1", price: "$10", image: "https://cdn.pixabay.com/photo/2023/12/18/12/31/house-8455970_960_720.jpg" }}
      />
    )
  },
  play: async ({ canvasElement }) => {
    // const canvas = within(canvasElement)
    // await waitFor(async () => {
    //   canvas.getByText("QuestionListView")
    // })
  },
}
