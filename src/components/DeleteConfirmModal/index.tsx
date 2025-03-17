import React from 'react';
import { Modal, TouchableWithoutFeedback } from 'react-native';
import {
  Container,
  ModalContent,
  Title,
  ButtonsContainer,
  CancelButton,
  CancelButtonText,
  ConfirmButton,
  ConfirmButtonText
} from './styles';

interface DeleteConfirmModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function DeleteConfirmModal({ visible, onClose, onConfirm }: DeleteConfirmModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <Container>
          <TouchableWithoutFeedback onPress={() => {}}>
            <ModalContent>
              <Title>Deseja realmente excluir o registro da refeição?</Title>
              
              <ButtonsContainer>
                <CancelButton onPress={onClose}>
                  <CancelButtonText>Cancelar</CancelButtonText>
                </CancelButton>
                
                <ConfirmButton onPress={onConfirm}>
                  <ConfirmButtonText>Sim, excluir</ConfirmButtonText>
                </ConfirmButton>
              </ButtonsContainer>
            </ModalContent>
          </TouchableWithoutFeedback>
        </Container>
      </TouchableWithoutFeedback>
    </Modal>
  );
} 