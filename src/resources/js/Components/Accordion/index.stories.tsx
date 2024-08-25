import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '.';

const meta: Meta<typeof Accordion> = {
  title: 'components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render() {
    return (
      <Accordion title="sss">defaultTitle</Accordion>
    )
  },
}
export const Blue: Story = {
  render() {
    return (
      <div className="max-w-lg mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Filters</h2>

        <Accordion title="Location">
          {/* Example filter options for Location */}
          <div>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" />
              New York
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" />
              Los Angeles
            </label>
          </div>
        </Accordion>

        <Accordion title="Price Range">
          {/* Example filter options for Price Range */}
          <div>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" />
              $0 - $100
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" />
              $100 - $500
            </label>
          </div>
        </Accordion>

        <Accordion title="Property Type">
          {/* Example filter options for Property Type */}
          <div>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" />
              Apartment
            </label>
            <label className="block mb-2">
              <input type="checkbox" className="mr-2" />
              House
            </label>
          </div>
        </Accordion>
      </div>
    )
  },
}
