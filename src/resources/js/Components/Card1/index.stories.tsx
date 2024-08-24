import { Meta, StoryObj } from '@storybook/react';
import { Card1 } from '.';

const meta: Meta<typeof Card1> = {
  title: 'components/Card1',
  component: Card1,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render() {
    return (
      <Card1
        sportImage="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjrFgr4mMdCQri6Jn6ITKB2CJ93Zh89Llj01seHWUBD5FNU4rYPQK533_VpY1ngpwqwyWTmZpWSkqEI2uxPQ7W89ft1YpOPciNfVI7evNEY_r1SVGYVWr5sSHTqgzo7PiPOSRN3X7m4Pl59/s800/soccer_ball.png"
        sportName="サッカー"
        dateTime="2024年8月30日 15:00"
        currentParticipants={10}
        location="東京ドーム"
        nearestStation="水道橋駅"
        deadline="2024年8月28日"
        fee="500円"
        tags={['初心者歓迎', '女性限定']}
        onJoinClick={() => console.log()}
      />
    )
  },
}
