import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  table: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomColor: "#bfbfbf",
    borderBottomWidth: 1,
    alignItems: "center",
    minHeight: 24,
  },
  tableHeader: {
    backgroundColor: "#f0f0f0",
  },
  tableCellHeader: {
    flex: 1,
    padding: 4,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  tableCell: {
    flex: 1,
    padding: 4,
    fontSize: 10,
    textAlign: "center",
  },
  tableCellLarge: {
    flex: 2,  
    padding: 4,
    fontSize: 10,
    textAlign: "center",
  },
});

const TablePDFDocument = ({ users }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={styles.tableCellHeader}>No.</Text>
          <Text style={styles.tableCellHeader}>Name</Text>
          <Text style={styles.tableCellHeader}>Username</Text>
          <Text style={styles.tableCellHeader}>Email</Text>
          <Text style={styles.tableCellHeader}>Phone Number</Text>
        </View>

        {users.map((user, index) => (
          <View style={styles.tableRow} key={user.id}>
            <Text style={styles.tableCell}>{index + 1}</Text>
            <Text style={styles.tableCell}>{user.name}</Text>
            <Text style={styles.tableCell}>{user.username}</Text>
            <Text style={styles.tableCellLarge}>{user.email}</Text>
            <Text style={styles.tableCell}>{user.phone}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

export default TablePDFDocument;
