"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, RefreshCw, Play, Pause } from 'lucide-react';

const Patlu = () => (
  <div className="text-4xl select-none" aria-label="Patlu">🧍‍♂️</div>
);

const Samosa = () => (
    <div className="text-2xl select-none" aria-label="Samosa">🥟</div>
);

const PLAYER_WIDTH = 40;
const SAMOSA_WIDTH = 30;
const PLAYER_SPEED = 20;
const SAMOSA_SPEED = 3;
const GAME_HEIGHT = 400;

export const MotuPatluGame = () => {
    const [playerX, setPlayerX] = useState(230);
    const [samosas, setSamosas] = useState<{ id: number, x: number, y: number }[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const gameAreaRef = useRef<HTMLDivElement>(null);
    const gameWidth = useRef(500);

    useEffect(() => {
        if(gameAreaRef.current) {
            gameWidth.current = gameAreaRef.current.offsetWidth;
            setPlayerX(gameWidth.current / 2 - PLAYER_WIDTH / 2);
        }
    }, []);

    // Game loop
    useEffect(() => {
        if (!isPlaying || gameOver) return;

        const interval = setInterval(() => {
            setSamosas(s => s.map(samosa => ({ ...samosa, y: samosa.y + SAMOSA_SPEED })).filter(samosa => {
                 if (
                    samosa.y > GAME_HEIGHT - 50 &&
                    samosa.y < GAME_HEIGHT - 20 &&
                    samosa.x + SAMOSA_WIDTH > playerX &&
                    samosa.x < playerX + PLAYER_WIDTH
                ) {
                    setScore(sc => sc + 1);
                    return false;
                }
                return samosa.y < GAME_HEIGHT;
            }));

        }, 50);

        return () => clearInterval(interval);
    }, [isPlaying, gameOver, playerX]);

    // Samosa spawner
    useEffect(() => {
        if (!isPlaying || gameOver) return;

        const spawner = setInterval(() => {
            const newSamosa = {
                id: Date.now(),
                x: Math.random() * (gameWidth.current - SAMOSA_WIDTH),
                y: -30,
            };
            setSamosas(s => [...s, newSamosa]);
        }, 1200);

        return () => clearInterval(spawner);
    }, [isPlaying, gameOver]);
    
    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isPlaying || gameOver) return;
            if (e.key === 'ArrowLeft') {
                setPlayerX(x => Math.max(0, x - PLAYER_SPEED));
            } else if (e.key === 'ArrowRight') {
                setPlayerX(x => Math.min(gameWidth.current - PLAYER_WIDTH, x + PLAYER_SPEED));
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isPlaying, gameOver]);

    const resetGame = () => {
        if(gameAreaRef.current) gameWidth.current = gameAreaRef.current.offsetWidth;
        setPlayerX(gameWidth.current / 2 - PLAYER_WIDTH / 2);
        setSamosas([]);
        setScore(0);
        setGameOver(false);
        setIsPlaying(true);
    };

    const togglePlay = () => {
      if (gameOver) {
        resetGame();
      } else {
        setIsPlaying(!isPlaying);
      }
    }
    
    // Check for game over (samosas missed)
    useEffect(() => {
        const missedSamosas = samosas.filter(s => s.y >= GAME_HEIGHT).length;
        if (score > 0 && missedSamosas > 5) {
            setGameOver(true);
            setIsPlaying(false);
        }
    }, [samosas, score]);

    return (
        <div className="flex flex-col items-center gap-4">
            <div
                ref={gameAreaRef}
                className="relative bg-background border-2 border-dashed border-primary/50 rounded-lg overflow-hidden w-full"
                style={{ height: `${GAME_HEIGHT}px` }}
                aria-roledescription="game-canvas"
            >
                {(!isPlaying && !gameOver) && (
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center z-20 text-center p-4">
                        <h3 className="text-2xl font-bold text-white mb-4">Catch the Samosas!</h3>
                        <Button onClick={togglePlay} size="lg">
                            <Play className="mr-2 h-5 w-5" /> Start Game
                        </Button>
                    </div>
                )}
                 {gameOver && (
                    <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-20 text-center p-4">
                        <h3 className="text-3xl font-bold text-white">Game Over!</h3>
                        <p className="text-xl text-white mt-2 mb-4">Your score: {score}</p>
                        <Button onClick={resetGame} size="lg">
                           <RefreshCw className="mr-2 h-5 w-5" /> Play Again
                        </Button>
                    </div>
                )}
                {(isPlaying || gameOver) && (
                    <>
                        <div
                            className="absolute bottom-4 transition-transform duration-75"
                            style={{ left: `${playerX}px`, width: `${PLAYER_WIDTH}px` }}
                        >
                            <Patlu />
                        </div>

                        {samosas.map(samosa => (
                            <div key={samosa.id} className="absolute" style={{ left: samosa.x, top: samosa.y }}>
                                <Samosa />
                            </div>
                        ))}
                    </>
                )}
                 <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-4 py-1 rounded-md font-bold text-lg z-10">
                    Score: {score}
                </div>
                 {isPlaying && !gameOver && (
                     <Button variant="ghost" size="icon" className="absolute top-2 left-2 z-10" onClick={togglePlay}>
                        <Pause className="h-5 w-5" />
                     </Button>
                 )}
                 {!isPlaying && !gameOver && score > 0 && (
                     <Button variant="ghost" size="icon" className="absolute top-2 left-2 z-10" onClick={togglePlay}>
                        <Play className="h-5 w-5" />
                     </Button>
                 )}
            </div>
            <div className="flex sm:hidden items-center gap-4">
                 <Button onPointerDown={() => setPlayerX(x => Math.max(0, x - PLAYER_SPEED))} size="lg">
                    <ArrowLeft />
                 </Button>
                 <Button onPointerDown={() => setPlayerX(x => Math.min(gameWidth.current - PLAYER_WIDTH, x + PLAYER_SPEED))} size="lg">
                    <ArrowRight />
                 </Button>
            </div>
            <p className="text-sm text-muted-foreground hidden sm:block">Use arrow keys to move.</p>
        </div>
    );
};
