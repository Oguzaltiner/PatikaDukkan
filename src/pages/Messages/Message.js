import React from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';

import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/modal/ContentInput';

import styles from './Message.style';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import parseContentData from '../../utils/parseContentData';

import MessageCard from '../../components/card/MessageCard';
const Message = () => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);
  const [contentList, setContentList] = React.useState([]);

  React.useEffect(() => {
    database()
      .ref('messages/')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        if (!contentData) {
          return;
        }
        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
      });
  }, []);
  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }
  function handleSendContent(content) {
    handleInputToggle();
    sendContent(content);
  }
  function sendContent(content) {
    const userMail = auth().currentUser.email;

    const contentObj = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
    };
    database().ref('messages/').push(contentObj);
  }
  const renderContent = ({item}) => <MessageCard message={item}></MessageCard>;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={contentList} renderItem={renderContent} />
      <FloatingButton icon="plus" onPress={handleInputToggle} />
      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </SafeAreaView>
  );
};
export default Message;
