import {StyleSheet} from 'react-native';

const signupStyle = StyleSheet.create({
  button: {
    backgroundColor: '#5B59FE',
    marginLeft: 33,
    marginRight: 34,
    marginTop: 24,
    borderRadius: 8,
  },
  buttontext: {
    marginTop: 12,
    marginBottom: 12,
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 23,
  },
  Findr: {
    color: '#5B59FE',
    marginTop: -30,
    fontFamily: 'Familjen Grotesk',
    fontSize: 64,
    fontWeight: '700',
    lineHeight: 77,
    textAlign: 'center',
  },
  mainheading: {
    color: '#121212',
    width: 400,
    fontSize: 23,
    fontFamily: 'Familjen Grotesk',
    lineHeight: 27.6,
    textAlign: 'center',
  },
  name: {
    color: '#121212',
    width: 40,
    marginTop: 34,
    marginLeft: 33,
    height: 20,
    fontFamily: 'Familjen Grotesk',
    lineHeight: 27.6,
    textAlign: 'center',
  },
  inputemail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 33,
    marginRight: 34,
    marginTop: 5,
    borderWidth: 1,
    width: 310,
    borderColor: '#D0D5DD',
    borderRadius: 8,
  },
  input1: {
    padding: 12,
    marginTop: 6,
    height: 44,
    marginLeft: 33,
    marginRight: 4,
    maxWidth: 500,
    width: 308,
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D0D5DD',
  },
  textemail: {
    color: '#121212',
    width: 40,
    marginTop: 24,
    marginLeft: 33,
    height: 20,
    fontFamily: 'Familjen Grotesk',
    lineHeight: 27.6,
    textAlign: 'center',
  },
  passwordH: {
    color: '#121212',
    width: 65,
    marginTop: 24,
    marginLeft: 33,
    height: 30,
    fontFamily: 'Familjen Grotesk',
    lineHeight: 27.6,
    textAlign: 'center',
  },
  LastLine: {
    color: '#5B59FE',
    textDecorationLine: 'underline',
    marginTop: 31,
    textAlign: 'center',
  },
});
export default signupStyle;