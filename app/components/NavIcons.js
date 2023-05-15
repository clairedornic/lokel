import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { AcademicCapIcon, UserIcon } from "react-native-heroicons/solid";
import { AcademicCapIcon as AcademicCapIconOutline, UserIcon as UserIconOutline } from "react-native-heroicons/outline";

const NavIcons = ({ color, iconName }) => {
    const svgLeftArrow = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" /></svg>';
    const svgRightArrow = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>';
  
    let iconComponent;

    if (iconName === 'Apprendre') {
      iconComponent = <AcademicCapIconOutline width={46} color={color} />;
    } else if (iconName === 'Profil') {
      iconComponent = <UserIconOutline width={46} color={color} />;
    } else {
      iconComponent = (
        <View>
          <SvgXml xml={svgLeftArrow} width={35} height={35} color={color} />
          <SvgXml xml={svgRightArrow} width={35} height={35} color={color} />
        </View>
      );
    }
  
    return iconComponent;
  };

  export default NavIcons;
