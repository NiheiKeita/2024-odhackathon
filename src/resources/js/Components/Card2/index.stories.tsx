import { Meta, StoryObj } from '@storybook/react';
import { Card2 } from '.';

const meta: Meta<typeof Card2> = {
  title: 'components/Card2',
  component: Card2,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render() {
    return (
      <Card2
        sportImage="https://media.istockphoto.com/id/477252604/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E6%97%A5%E6%9C%AC%E3%81%AE%E9%AB%98%E6%A0%A1%E3%81%BE%E3%81%99-%E7%A9%BA%E3%81%AE%E4%BD%93%E8%82%B2%E9%A4%A8-%E3%83%90%E3%82%B9%E3%82%B1%E3%83%83%E3%83%88%E3%83%9C%E3%83%BC%E3%83%AB%E3%82%B3%E3%83%BC%E3%83%88%E3%81%AE%E3%83%9E%E3%83%BC%E3%82%AD%E3%83%B3%E3%82%B0.jpg?s=1024x1024&w=is&k=20&c=_ltvK2sW0myyUCY9xZ0CuM580-hIG2RhUbBYeA47mic="
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
