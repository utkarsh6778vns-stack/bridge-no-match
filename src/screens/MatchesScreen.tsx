import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { MatchCard, MatchStatus } from '../components/matches/MatchCard';
import { BottomTabBar } from '../components/Community/BottomTabBar';

const DUMMY_MATCHES = [
    {
        id: '1',
        status: 'active_match' as MatchStatus,
        name: 'Brooklyn',
        age: 26,
        matchDate: 'Sep 14, 2026',
        imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=800',
        matchedByAvatars: [
            'https://randomuser.me/api/portraits/men/32.jpg',
            'https://randomuser.me/api/portraits/women/44.jpg',
            'https://randomuser.me/api/portraits/men/46.jpg'
        ]
    }
];

export default function MatchesScreen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{ paddingTop: 48, paddingHorizontal: 16, paddingBottom: 12 }}>
                <Text style={{ fontFamily: 'Outfit_600SemiBold', fontSize: 22, lineHeight: 28, color: '#010101' }}>
                    Match
                </Text>
            </View>

            <View style={{ flex: 1, paddingHorizontal: 16, paddingBottom: 16, marginTop: 8 }}>
                {DUMMY_MATCHES.map((match) => (
                    <MatchCard
                        key={match.id}
                        status={match.status}
                        name={match.name}
                        age={match.age}
                        matchDate={match.matchDate}
                        imageUrl={match.imageUrl}
                        matchedByAvatars={match.matchedByAvatars}
                    />
                ))}
            </View>

            {/* Bottom Navigation */}
            <View style={{ height: 72 }}>
                <BottomTabBar />
            </View>
        </SafeAreaView>
    );
}
