import React from 'react';
import {View, TextInput} from 'react-native';
import Modal from 'react-native-modal';
import {Button} from '../../Button';
import styles from './ContentInputModal.style';
const ContentInputModal = ({visible, onClose, onSend}) => {
  const [text, setText] = React.useState(null);

  function handleSend() {
    if (!text) {
      return;
    }
    onSend(text);
    setText('');
  }
  return (
    <Modal
      swipeDirection="down"
      style={styles.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            multiline
            placeholder="darla hadi milleti"
            onChangeText={setText}
          />
        </View>
        <Button text="gönder" onPress={() => onSend(text)} />
      </View>
    </Modal>
  );
};

export default ContentInputModal;
