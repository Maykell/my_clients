import { StyleSheet } from 'react-native';
import { marginSize } from '../../styles/sizes';

const styles = StyleSheet.create({
    listContentContainer: {
        flexGrow: 1,
        paddingBottom: 12,
        paddingTop: 12
    },
    searchBar: {
        marginTop: marginSize.large,
        marginBottom: marginSize.verySmall,
        marginHorizontal: marginSize.large,
    }
})

export default styles;