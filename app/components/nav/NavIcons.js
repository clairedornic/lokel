import { View, StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { AcademicCapIcon, UserIcon } from "react-native-heroicons/solid";
import { AcademicCapIcon as AcademicCapIconOutline, UserIcon as UserIconOutline } from "react-native-heroicons/outline";

const NavIcons = ({ color, iconName, focused }) => {
    const svgLeftArrow = '<svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_136_31)"><path d="M4.75 8.75L1 5M1 5L4.75 1.25M1 5H19" stroke="#7149DD" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_136_31"><rect width="20" height="10" fill="white"/></clipPath></defs></svg>';
    const svgRightArrow = '<svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_135_29)"><path d="M15.25 1.25L19 5M19 5L15.25 8.75M19 5H1" stroke="#7149DD" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_135_29"><rect width="20" height="10" fill="white"/></clipPath></defs></svg>';
    const svgLeftArrowFocus = '<svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_136_31)"><path d="M4.75 8.75L1 5M1 5L4.75 1.25M1 5H19" stroke="#7149DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_136_31"><rect width="20" height="10" fill="white"/></clipPath></defs></svg>';
    const svgRightArrowFocus = '<svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_135_29)"><path d="M15.25 1.25L19 5M19 5L15.25 8.75M19 5H1" stroke="#7149DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_135_29"><rect width="20" height="10" fill="white"/></clipPath></defs></svg>';
    let iconComponent;

    if ( iconName === 'Apprendre' ) {
      if ( focused ) {
        iconComponent = <AcademicCapIcon width={46} fill={color} color={color} />;
      } else {
        iconComponent = <AcademicCapIconOutline width={46} color={color} />;
      }
      
    } else if (iconName === 'Profil') {
      if ( focused ) {
        iconComponent = <UserIcon width={46} fill={color} color={color} />;
      } else {
        iconComponent = <UserIconOutline width={46} color={color} />;
      }
      
    } else {
      if ( focused ) {
        iconComponent = (
          <View style={styles.containerIconArrowActive}>
            <SvgXml xml={svgLeftArrowFocus} width={35} height={12} color={color} />
            <SvgXml xml={svgRightArrowFocus} width={35} height={12} color={color} />
          </View>
        );
      } else {
        iconComponent = (
          <View style={styles.containerIconArrow} >
            <SvgXml xml={svgLeftArrow} width={35} height={12} color={color} />
            <SvgXml xml={svgRightArrow} width={35} height={12} color={color} />
          </View>
        );
      }
    }
  
    return iconComponent;
};

const styles = StyleSheet.create({
	containerIconArrow: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
	},
  containerIconArrowActive: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    // borderBottomWidth: 2,
    // borderBottomColor: '#7149DD'
  }
});
export default NavIcons;
