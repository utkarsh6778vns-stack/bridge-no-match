import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { CheckmarkIcon, HourglassIcon, ChatIcon, HeartsIcon, ArrowRightIcon } from '../Icons/Icons';

// ──────────────────────────────────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────────────────────────────────
export type MatchStatus =
    | 'active_match'
    | 'awaiting_you'
    | 'awaiting_them'
    | 'no_match'
    | 'new_match';

const STATUS_CONFIG: Record<
    MatchStatus,
    { label: string; topBgColor?: string; bottomBgColor?: string; Icon: React.FC<any> }
> = {
    active_match: {
        label: 'Active match',
        topBgColor: '#34C759',
        bottomBgColor: 'rgba(52, 199, 89, 0.2)',
        Icon: CheckmarkIcon,
    },
    awaiting_you: {
        label: 'Awaiting your response',
        // Exact Figma value: #FF8D28
        topBgColor: '#FF8D28',
        Icon: HourglassIcon,
    },
    awaiting_them: {
        label: 'Awaiting their response',
        topBgColor: '#1C1C1E',
        Icon: HourglassIcon,
    },
    no_match: {
        label: 'No match',
        topBgColor: '#8E8E93',
        Icon: HourglassIcon,
    },
    new_match: {
        label: 'New match',
        topBgColor: '#2B65F9',
        Icon: CheckmarkIcon,
    },
};

// ──────────────────────────────────────────────────────────────────────────────
// Props
// ──────────────────────────────────────────────────────────────────────────────
interface MatchCardProps {
    status: MatchStatus;
    name: string;
    age: number;
    /** For active_match shows "Matched {date}"; for awaiting_you shows "Expires in {expiresIn}" */
    expiresIn?: string;
    matchDate?: string;
    imageUrl: string;
    matchedByAvatars: string[];
    /** Whether the other person already voted yes — shows the voted banner */
    theyVotedYes?: boolean;
    onPress?: () => void;
}

// ──────────────────────────────────────────────────────────────────────────────
// Component
// ──────────────────────────────────────────────────────────────────────────────
export const MatchCard: React.FC<MatchCardProps> = ({
    status,
    name,
    age,
    expiresIn,
    matchDate,
    imageUrl,
    matchedByAvatars,
    theyVotedYes = false,
    onPress,
}) => {
    const config = STATUS_CONFIG[status];
    const isAwaitingYou = status === 'awaiting_you';
    const isActiveMatch = status === 'active_match';

    return (
        // Card: width 343, height 616 — via flex:1 in parent. border-radius: 10px (Figma)
        <View style={styles.card}>
            <ImageBackground
                source={{ uri: imageUrl }}
                style={StyleSheet.absoluteFillObject}
                imageStyle={styles.cardImage}
                resizeMode="cover"
            >
                {/* Gradient overlay — exact Figma stops */}
                <LinearGradient
                    colors={[
                        'rgba(9, 18, 46, 0)',
                        'rgba(9, 18, 46, 0.2)',
                        'rgba(9, 18, 46, 0.5)',
                    ]}
                    locations={[0.6313, 0.7505, 1.0]}
                    style={StyleSheet.absoluteFillObject}
                />

                <View style={styles.cardInner}>

                    {/* ── Top: Status Badge — left 28, top 120 from screen, padding 6 10 ── */}
                    <View style={styles.topRow}>
                        {config.topBgColor && (
                            <View style={[styles.statusBadge, { backgroundColor: config.topBgColor }]}>
                                <config.Icon size={18} color="#FFF" />
                                <Text style={styles.statusBadgeText}>
                                    {config.label}
                                </Text>
                            </View>
                        )}
                    </View>

                    {/* ── Bottom Section ── */}
                    {/* Frame 1686561293: gap 12 between voted-banner and the name/avatars/expiry block */}
                    <View style={styles.bottomSection}>

                        {/* "They voted yes" banner — Frame 1686560329 */}
                        {/* background: rgba(132,132,132,0.2), backdrop-filter blur(32) */}
                        {isAwaitingYou && theyVotedYes && (
                            <View style={styles.votedBanner}>
                                <CheckmarkIcon size={18} color="#FFFFFF" />
                                <Text style={styles.votedBannerText}>
                                    They voted yes – Awaiting your vote
                                </Text>
                            </View>
                        )}

                        {/* Frame 1686560328: gap 8 between name and avatars/expiry rows */}
                        <View style={styles.nameBlock}>

                            {/* Active match secondary badge */}
                            {isActiveMatch && config.bottomBgColor && (
                                <View style={[styles.activeMatchBadge, { backgroundColor: config.bottomBgColor }]}>
                                    <CheckmarkIcon size={14} color="#FFF" />
                                    <Text style={styles.activeMatchBadgeText}>Match complete</Text>
                                </View>
                            )}

                            {/* Brooklyn, 26 — font-size: 24, weight: 600 */}
                            <Text style={styles.nameText}>
                                {name}, {age}
                            </Text>

                            {/* Matched by row — gap 6, icons 22×22 */}
                            {matchedByAvatars.length > 0 && (
                                <View style={styles.matchedByRow}>
                                    <HeartsIcon size={22} color="#00C8B3" />
                                    <Text style={styles.matchedByText}>Matched by :</Text>
                                    <View style={styles.avatarRow}>
                                        {matchedByAvatars.map((avatar, idx) => (
                                            <View
                                                key={idx}
                                                style={[
                                                    styles.avatarCircle,
                                                    { marginLeft: idx > 0 ? -6 : 0 },
                                                ]}
                                            >
                                                <ImageBackground
                                                    source={{ uri: avatar }}
                                                    style={{ width: '100%', height: '100%' }}
                                                    imageStyle={{ borderRadius: 11 }}
                                                />
                                            </View>
                                        ))}
                                    </View>
                                </View>
                            )}

                            {/* Expires in / Matched date — font-weight 300, opacity 0.7 */}
                            {isAwaitingYou && expiresIn ? (
                                <Text style={styles.expiryText}>
                                    Expires in {expiresIn}
                                </Text>
                            ) : matchDate ? (
                                <Text style={styles.expiryText}>
                                    Matched {matchDate}
                                </Text>
                            ) : null}
                        </View>
                    </View>
                </View>
            </ImageBackground>

            {/* ── Action Button — Ellipse 7: 54×54, background #FFFFFF ── */}
            <TouchableOpacity
                onPress={onPress}
                style={styles.actionButton}
                activeOpacity={0.85}
            >
                {isAwaitingYou ? (
                    <ArrowRightIcon size={24} color="#010101" />
                ) : (
                    <ChatIcon size={24} color="#2563EB" />
                )}
            </TouchableOpacity>
        </View>
    );
};

// ──────────────────────────────────────────────────────────────────────────────
// Styles — all values straight from Figma CSS
// ──────────────────────────────────────────────────────────────────────────────
const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderRadius: 10,          // Figma: border-radius 10px
        overflow: 'hidden',
        backgroundColor: '#000',
    },
    cardImage: {
        borderRadius: 10,
    },
    cardInner: {
        flex: 1,
        paddingHorizontal: 12,     // card left is 16px from edge, badge left is 28px → 12px inner
        paddingTop: 12,            // badge is at top:120, card at top:108 → 12px inner top
        paddingBottom: 0,
        justifyContent: 'space-between',
    },
    topRow: {
        flexDirection: 'row',
    },
    // Frame 1686560325: padding 6px 10px, border-radius 8px
    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 6,
        gap: 6,                    // Figma: gap 10px between icon and text in inner frame; gap 6 in inner frame
    },
    statusBadgeText: {
        color: '#FFFFFF',
        fontFamily: 'Outfit_600SemiBold',
        fontSize: 14,              // Figma: font-size 14px, weight 600
        lineHeight: 18,
    },
    // Frame 1686561293: gap 12, bottom-left positioned
    bottomSection: {
        gap: 12,
        paddingBottom: 16,
        paddingRight: 70,          // leave room for the action button which is absolutely positioned
    },
    // Frame 1686560329 voted banner: width 264, height 30, padding 6 10
    // background: rgba(132,132,132,0.2), border-radius 8
    votedBanner: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(132, 132, 132, 0.2)',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 6,
        gap: 6,
    },
    votedBannerText: {
        color: '#FFFFFF',
        fontFamily: 'Outfit_400Regular',
        fontSize: 14,              // Figma: font-size 14px, weight 400
        lineHeight: 18,
    },
    // Frame 1686560328: gap 8
    nameBlock: {
        gap: 8,
    },
    activeMatchBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 5,
        gap: 6,
        alignSelf: 'flex-start',
    },
    activeMatchBadgeText: {
        color: 'white',
        fontSize: 13,
        fontFamily: 'Outfit_400Regular',
    },
    // "Brooklyn, 26": font-size 24, weight 600
    nameText: {
        color: '#FFFFFF',
        fontFamily: 'Outfit_600SemiBold',
        fontSize: 24,
        lineHeight: 30,
    },
    // Matched by row: gap 6
    matchedByRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    matchedByText: {
        color: '#FFFFFF',
        fontFamily: 'Outfit_400Regular',
        fontSize: 14,
        lineHeight: 18,
    },
    avatarRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    // Ellipse 4/5/6: width 22, height 22, border 1px solid white, margin 0 -6
    avatarCircle: {
        width: 22,
        height: 22,
        borderRadius: 11,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        overflow: 'hidden',
    },
    // "Expires in 2 hours": font-size 14, weight 300, opacity 0.7
    expiryText: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontFamily: 'Outfit_300Light',
        fontSize: 14,
        lineHeight: 18,
    },
    // Ellipse 7: width 54, height 54, background #FFFFFF
    actionButton: {
        position: 'absolute',
        right: 16,                 // Card width 343, ellipse left=293, so 343-293-54=card_edge... right: 16
        bottom: 16,
        width: 54,
        height: 54,
        borderRadius: 27,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 12,
        elevation: 6,
    },
});
