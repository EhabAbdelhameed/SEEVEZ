import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

const FooterSection = ({
    totalPages,
    currentPage,
    onPageChange
}: {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}) => {
    // Generate an array of page numbers from 1 to totalPages
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <View style={styles.containerFooterUsers1}>
            {/* Render pagination numbers */}
            {pages.map(page => (
                <TouchableOpacity
                    key={page}
                    onPress={() => onPageChange(page)}
                    style={[
                        styles.paginationNumber,
                        currentPage === page && styles.activePaginationNumber
                    ]}
                >
                    <Text style={[styles.paginationText,{color:currentPage === page?'#FFF':'#000'}]}>{page}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default FooterSection;
