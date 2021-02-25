import React from 'react'
import { Modal } from '../components/uiComponents/Modal'

export default {
  title: 'DraggableModal',
  component: Modal,
};

export const defaultDraggableModal = () => <div>
  <Modal isShow={true} closeModal={() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  }}>modal</Modal>
</div>;

export const mobileViewModal = () => <div>
  <Modal isShow={true} view={'mobile'} closeModal={() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
  }}>modal</Modal>
</div>;