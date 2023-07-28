import BasicLayout from "@/components/layouts/BasicLayout";
import CustomModal from "@/components/modal/Modal";
import { Button, Modal, Space } from "antd";
import { useCallback, useState } from "react";
import styled from "styled-components";

const Sample: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCustomModalOpen, setIsOpenModal] = useState(false);
  const toggleCustomModal = useCallback(() => {
    setIsOpenModal((prev) => !prev);
  }, []);

  const [isAntdModal, setIsAntdModal] = useState(false);
  const openAntdModal = useCallback(() => {
    setIsAntdModal(true);
  }, []);

  const closeAntdModal = useCallback(() => {
    setIsAntdModal(false);
  }, []);

  return (
    <BasicLayout>
      <Space>
        <Button type="primary" onClick={toggleCustomModal}>
          CUSTOM MODAL
        </Button>
        <Button type="default" onClick={openAntdModal}>
          ANTD MODAL
        </Button>
      </Space>

      {isCustomModalOpen && (
        <CustomModal onClose={toggleCustomModal}>
          <CustomModal.Title>MODAL TITLE</CustomModal.Title>
          <div>MODAL CONTENT</div>
        </CustomModal>
      )}

      <StyledModal
        title="ANT DESIGN MODAL"
        open={isAntdModal}
        onOk={closeAntdModal}
        onCancel={closeAntdModal}
        okText="확인"
        cancelText="취소"
      >
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
      </StyledModal>

      {children}
    </BasicLayout>
  );
};

// ant-design + styled-components
const StyledModal = styled(Modal)`
  .ant-modal-content {
    border: 1px solid black;
  }
`

export default Sample;
