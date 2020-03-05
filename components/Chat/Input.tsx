import React from 'react';
import { StyleSheet, View, ViewStyle, TextInput } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from "../../hooks/useTheme";
import { isIOS } from "../../utils";

interface Props {
    placeholder: string;
};

const Input: React.FunctionComponent<Props> = ({
    placeholder
}: Props) => {
    const theme: AppTheme = useTheme();

    return (
        <View>
            <View style={[style.containerNew, {borderColor: theme.lightBottomColor}]}>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={theme.lightTextColor}
                    style={{ color: theme.textColor }}
                />         
            </View>   
        </View>
    );
};

export default Input;

interface Style {
    containerNew: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    containerNew: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        padding: 10,
        paddingTop: isIOS() ? 20 : 10,
        paddingBottom: isIOS() ? 10 : 0,
        marginTop: 10,
        borderBottomWidth: 2,
    },
})