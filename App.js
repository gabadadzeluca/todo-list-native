import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { useState } from "react";
import Task from "./components/Task";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const handleInputChange = (text) => {
    setText(text);
  };
  const addTask = () => {
    if (text.length === 0) return;
    let taskIndex;
    if (tasks.length === 0 || isNaN(tasks[tasks.length - 1]?.index)) {
      taskIndex = 0;
    } else {
      taskIndex = tasks[tasks.length - 1].index + 1;
    }
    const taskObj = {
      text,
      index: taskIndex,
    };
    setText("");
    setTasks([...tasks, taskObj]);
  };

  const deleteTask = (index) => {
    newTasks = tasks.filter((task) => task.index != index);
    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks:</Text>
        <View style={styles.items}>
          {tasks.length == 0 && <Text>No Tasks</Text>}
          {tasks.map((task, index) => (
            <Task taskObj={task} key={index} deleteTask={deleteTask} />
          ))}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS == "android" ? "height" : "padding"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          value={text}
          onChangeText={handleInputChange}
          style={styles.input}
          placeholder="Write a task"
        />
        <TouchableOpacity style={styles.addWrapper} onPress={addTask}>
          <Image source={require("./assets/plusIcon.png")} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    width: 246,
    height: 45,
    borderRadius: 60,
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 14,
    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 30,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
