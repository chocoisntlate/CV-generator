import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    display: "flex",
    padding: "20px"
  },
  section: {
    margin: 10,
    padding: 10,
    flexDirection: "column",
    alignItems: "center"
  },

  fullname: {
    fontSize: '25px',
    fontWeight: 'bold'
  },

  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginVertical: 8,
    width: '100%',
  },
  
  listItem: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  bullet: {
    marginHorizontal: 8,
  },

});

// Create Document Component
const MyDocument = ({inputs}) => {
    console.log(inputs);
    return (
    <Document>
        <Page size="A4" style={styles.page}>
            <View style={styles.section}>
                <Text style={styles.fullname}>{inputs[0]["First Name"] + " " + inputs[0]["Last Name"]}</Text>
                <Text>{inputs[0]["Email Address"]}</Text>
            </View>

            <View>
              <View style={styles.line}></View>

              <Text>Experience</Text>
              {inputs[2].map((exp, index) => {
                return (
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text key={index}>{exp[0] + " | " + exp[1] + " | " + exp[2] + " | " + exp[3]}</Text>
                  </View>
                )
              })}

              <View style={styles.line}></View>

              <Text>Education</Text>
              {inputs[1].map((exp, index) => {
                return (
                  <View style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text key={index}>{exp[0] + " | " + exp[1] + " | " + exp[2] + " | " + exp[3]}</Text>
                  </View>
                )
              })}
            </View>
        </Page>
    </Document>
    )
}
;

export default MyDocument
    