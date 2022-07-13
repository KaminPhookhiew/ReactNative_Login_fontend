import styled from "stled-components";
import {View , Image , Text , TextInput , TouchableOpacity} from "react-native";
import Contants from "expo-constants";

export const colors = {
    primary: "#fff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9ca3af",
    brand:"#6d28d9",
    green:"#10b981",
    red:"#ef4444",
};

const{ primary , secondary , tertiary , darkLight , brand , green , red } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    backgroud-color: ${primary};
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const PageLogo = styled.Image`
    width: 250px;
    height: 200px;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-aling: center;
    font-weight: bold;
    coloer: ${brand};
    padding: 10px;
`;