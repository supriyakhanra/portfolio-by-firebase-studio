"use client"

import { Section, SectionHeader } from "@/components/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { MotuPatluGame } from "@/components/motu-patlu-game";

export function GameSection() {
    return (
        <Section id="game">
            <SectionHeader title="Just for Fun!" subtitle="A quick game of Motu Patlu: Samosa Catch!" />
            <Card className="overflow-hidden shadow-lg">
                <CardContent className="p-0 sm:p-0">
                    <MotuPatluGame />
                </CardContent>
            </Card>
        </Section>
    )
}
