import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
} from 'react-native';
import { BottomTabBar } from '../components/Community/BottomTabBar';

// ─────────────────────────────────────────────────────────────────────────────
// No-Match Empty State Screen
// ─────────────────────────────────────────────────────────────────────────────
export default function MatchesScreen() {
    return (
        <SafeAreaView style={styles.root}>
            <StatusBar barStyle="dark-content" />

            {/* Header - Shifted down to top: 80px */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>No Match</Text>
            </View>

            {/* Main Container - Starts at top: 173px */}
            <View style={styles.container}>

                {/* Tagline Container */}
                <View style={styles.taglineSection}>
                    <Text style={styles.tagline}>Real connections take a little time</Text>
                </View>

                {/* Illustration Container */}
                <View style={styles.illustrationSection}>
                    <Image
                        source={require('../../assets/no_match_illustration.png')}
                        style={styles.illustration}
                        resizeMode="contain"
                    />
                </View>

                {/* Subtitle Container */}
                <View style={styles.subtitleSection}>
                    <Text style={styles.subtitle}>
                        No endless swiping. No pressure. Just meaningful matches.
                    </Text>
                </View>

                {/* CTA Button Container */}
                <View style={styles.ctaSection}>
                    <TouchableOpacity
                        style={styles.ctaButton}
                        activeOpacity={0.85}
                        onPress={() => {
                            console.log('Help others find their match pressed');
                        }}
                    >
                        <Text style={styles.ctaText}>Help others find their match</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Bottom Nav */}
            <View style={styles.navWrap}>
                <BottomTabBar />
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        position: 'absolute',
        top: 80, // As per Figma: top: 80px
        left: 25, // As per Figma: left: 25px
        width: 96,
        height: 28,
        justifyContent: 'center',
    },
    headerTitle: {
        fontFamily: 'Outfit_600SemiBold',
        fontSize: 22, // As per Figma: 22px
        lineHeight: 28,
        color: '#010101',
        textAlign: 'center',
    },
    container: {
        position: 'absolute',
        top: 173, // As per Figma: top: 173px
        left: 0,
        right: 0,
        alignItems: 'center',
        paddingBottom: 40,
    },
    taglineSection: {
        width: 322.36,
        height: 20,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 35, // Gap: 35px
    },
    tagline: {
        fontFamily: 'Outfit_600SemiBold', // Matches Inter SemiBold weight
        fontSize: 17, // As per Figma: 17px
        lineHeight: 21,
        color: '#0B1226',
        textAlign: 'center',
    },
    illustrationSection: {
        width: 320,
        height: 320,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 35, // Gap: 35px
    },
    illustration: {
        width: 320,
        height: 320,
    },
    subtitleSection: {
        width: 343,
        height: 34,
        paddingHorizontal: 43.14,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 35, // Gap: 35px
    },
    subtitle: {
        fontFamily: 'Outfit_500Medium', // Matches Inter Medium weight
        fontSize: 14, // As per Figma: 14px
        lineHeight: 17,
        color: '#6B7280',
        textAlign: 'center',
    },
    ctaSection: {
        width: '100%',
        height: 47,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ctaButton: {
        backgroundColor: '#007AFF', // As per Figma: #007AFF
        width: 250, // As per Figma: width: 250px
        height: 47, // As per Figma: height: 47px
        borderRadius: 9999,
        paddingVertical: 14,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0, 122, 255, 0.2)',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 12,
        elevation: 4,
    },
    ctaText: {
        fontFamily: 'Outfit_600SemiBold', // Matches Inter SemiBold weight
        fontSize: 15, // As per Figma: 15px
        lineHeight: 18,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    navWrap: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 72,
    },
});
