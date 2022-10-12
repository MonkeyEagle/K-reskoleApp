import * as React from "react";
import { TextInput, SafeAreaView } from "react-native";
import { styles } from "../constants/globalStyles";

type Props = {
  task: any;
  id: any;
  title: any;
  state: any;
  onArchiveTask: any;
  onPinTask: any;
};

export default function Task({ task: { title } }: Props) {
  return (
    <SafeAreaView style={styles.ListItem}>
      <TextInput value={title} editable={false} />
    </SafeAreaView>
  );
}
