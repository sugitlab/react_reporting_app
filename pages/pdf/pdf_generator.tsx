import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 30,
    paddingBottom: 50,
    paddingHorizontal: 20,
  },
  section: {
    margin: 10,
    padding: 10,
  },
  table: {
    fontSize: "10px",
  },
  row: {
    flexDirection: "row",
  },
  item: {
    borderWidth: "0.1",
    padding: 10,
    width: "10%",
  },
  image: {
    margin: 20,
    width: 50,
    height: 50,
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.body}>
      <View style={styles.section}>
        <Text>Sample Report</Text>
      </View>
      <View style={styles.table}>
        <View style={styles.row}>
          <View style={styles.item}>
            <Text> hello</Text>
          </View>
          <View style={styles.item}>
            <Text> world</Text>
          </View>
          <View style={styles.item}>
            <Text> !!!</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.item}>
            <Text> My name</Text>
          </View>
          <View style={styles.item}>
            <Text> is </Text>
          </View>
          <View style={styles.item}>
            <Text> Taro Shimadzu </Text>
          </View>
        </View>
      </View>
      <Image style={styles.image} src="https://react-pdf.org/images/logo.png" />
    </Page>
  </Document>
);

export default MyDocument;
