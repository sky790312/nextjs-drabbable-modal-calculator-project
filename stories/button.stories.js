import React from 'react'
import { Button } from '../components/uiComponents/Button'

export default {
  title: 'Button',
  component: Button,
};

export const defaultBtn = () => <Button>btn</Button>;
export const buttonStyleBtn = () => <div>
  <Button buttonStyle={'gray'}>btn</Button>
  <Button buttonStyle={'darkGray'}>btn</Button>
  <Button buttonStyle={'blue'}>btn</Button>
</div>;
export const sizeBtn = () => <div>
  <Button size={'md'}>btn</Button>
  <Button size={'block'}>btn</Button>
</div>;