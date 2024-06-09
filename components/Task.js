import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Task = (props) => {
  const taskObj = props.taskObj;
  const deleteTask = props.deleteTask;
  return (
    <View style={styles.taskContainer}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text>{taskObj.text}</Text>
      </View>
      <TouchableOpacity onPress={() => deleteTask(taskObj.index)}>
        <View style={styles.circular}></View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    marginBottom: 30,
    borderRadius: 10,
    backgroundColor: "lightblue",
  },
  itemLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF666",
    margin: 10,
    borderRadius: 5,
  },
  circular: {
    width: 12,
    height: 12,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#55BCF6",
    marginRight: 10,
  },
});

export default Task;
