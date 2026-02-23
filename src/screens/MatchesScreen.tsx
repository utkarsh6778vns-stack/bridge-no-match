import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { MatchCard, MatchStatus } from '../components/matches/MatchCard';
import { BottomTabBar } from '../components/Community/BottomTabBar';

// ─────────────────────────────────────────────────────────────────────────────
// Mock Data — swap this out with your API response shape when integrating backend
// ─────────────────────────────────────────────────────────────────────────────
const DUMMY_MATCHES = [
    {
        id: '1',
        status: 'awaiting_them' as MatchStatus,
        name: 'Brooklyn',
        age: 26,
        expiresIn: undefined,
        matchDate: 'Sep 14, 2026',
        imageUrl:
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800',
        matchedByAvatars: [
            'https://randomuser.me/api/portraits/men/32.jpg',
            'https://randomuser.me/api/portraits/women/44.jpg',
            'https://randomuser.me/api/portraits/men/46.jpg',
        ],
        theyVotedYes: false,
        youVotedYes: true,
        expiresXHours: 'Expires 12 hours',
    },
];

// ─────────────────────────────────────────────────────────────────────────────
// Screen
// ─────────────────────────────────────────────────────────────────────────────
export default function MatchesScreen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>

            {/* Status bar spacer — leaves room for mobile time & battery indicator */}
            <View style={{ height: 16 }} />

            {/* Header — pushed down from the status bar area */}
            <View style={{ paddingTop: 20, paddingHorizontal: 16, paddingBottom: 12 }}>
                <Text
                    style={{
                        fontFamily: 'Outfit_600SemiBold',
                        fontSize: 22,
                        lineHeight: 28,
                        color: '#010101',
                    }}
                >
                    Match
                </Text>
            </View>

            {/* Card — slightly smaller vertical footprint to keep status bar space clean */}
            <View style={{ flex: 1, paddingHorizontal: 16, paddingBottom: 20 }}>
                {DUMMY_MATCHES.map((match) => (
                    <MatchCard
                        key={match.id}
                        status={match.status}
                        name={match.name}
                        age={match.age}
                        expiresIn={match.expiresIn}
                        matchDate={match.matchDate}
                        imageUrl={match.imageUrl}
                        matchedByAvatars={match.matchedByAvatars}
                        theyVotedYes={match.theyVotedYes}
                        youVotedYes={match.youVotedYes}
                        expiresXHours={match.expiresXHours}
                        onPress={() => {
                            // TODO: navigate to vote/compatibility screen
                            console.log('Card pressed — navigate to vote screen');
                        }}
                    />
                ))}
            </View>

            {/* Bottom Nav — height 72, background #FFFFFF, border-top 1px #E9EDF5 */}
            <View style={{ height: 72 }}>
                <BottomTabBar />
            </View>
        </SafeAreaView>
    );
}
