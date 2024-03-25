import {StyleSheet} from 'react-native';
const NewsStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  cancel: {
    width: 10,
    height: 10,
    marginLeft: 308,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 23,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  emailtext: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    color: '#5B59FE',
    fontWeight: '500',
    fontSize: 11,
    paddingHorizontal: 70,
  },
  email: {
    backgroundColor: 'white',
    marginLeft: 18,
    marginRight: 17,
    marginTop: 112,
    borderRadius: 8,
    borderColor: '#5B59FE',
    borderWidth: 1,
  },
  reporttext: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
    fontSize: 11,
    paddingHorizontal: 90,
  },
  report: {
    backgroundColor: '#5B59FE',
    marginLeft: 18,
    marginRight: 17,
    marginTop: 16,
    borderRadius: 8,
  },
  personpopup: {
    width: 100,
    height: 100,
    marginTop: 24,
    marginLeft: 118,
    marginRight: 117,
    marginBottom: 16,
    borderRadius: 200,
  },
  first: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 29,
    marginTop: 16,
    marginBottom: 26,
    gap: 16,
  },
  backButton: {
    marginLeft: 3,
    width: 18,
    height: 12,
    marginTop: 11,
  },
  h1: {
    height: 30,
    color: '#000000',
    fontWeight: '600',
    fontSize: 23,
    marginLeft: 20,
  },
  search: {
    width: 19,
    height: 19,
    marginLeft: 240,
    marginRight: 9,
    marginTop: 0,
  },
  searchinput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 335,
    height: 40,
    marginLeft: 20,
    marginRight: 63,
    marginTop: 26,
    borderWidth: 1,
    borderColor: '#0F0F0F',
    borderRadius: 8,
  },
  filterText: {
    width: 65,
    height: 23,
    fontWeight: '500',
    fontSize: 14,
    color: '#000000',
  },
  filterDiv: {
    marginTop: 26,
    marginLeft: 21,
    marginBottom: 16,
    marginRight: 21,
    flexDirection: 'row',
  },
  touch: {
    color: '#344054',
    backgroundColor: '#FCFCFD',
    borderRadius: 6,
    gap: 8,
    width: 60,
    height: 36,
    textAlign: 'center',
    elevation: 6,
    marginHorizontal: 10,
    paddingTop: 8,
    marginTop: -8,
  },
  person: {
    marginLeft: 20,
    width: 115,
    height: 154,
  },
  buttontext: {
    marginVertical: 5,
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
    fontSize: 11,
  },
  button: {
    backgroundColor: '#5B59FE',
    marginTop: 15,
    borderRadius: 8,
    width: 95,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default NewsStyles;
