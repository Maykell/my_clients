import { StyleSheet } from 'react-native';
import { paddingSize, marginSize, fontSize } from '../../styles/sizes';
import { defaultTheme } from '../../styles/themes';

const styles = StyleSheet.create({

    card: {
        marginTop: marginSize.verySmall,
        marginBottom: marginSize.verySmall,
        marginHorizontal: marginSize.large,
    },
    cardContent: {
        flexDirection: 'row',
    },
    cardTextContainer: {
        flex: 1,
        marginLeft: marginSize.large
    },
    cardTextName: {
        width: 200,
        fontSize: fontSize.large,
        fontWeight: 'bold',
        paddingBottom: paddingSize.verySmall,
        color: defaultTheme.primaryTextColor
    },
    cardTextEmail: {
        width: 200,
        fontSize: fontSize.small
    },
    listItem: {
        flexDirection: 'column'
    }
})

export default styles;