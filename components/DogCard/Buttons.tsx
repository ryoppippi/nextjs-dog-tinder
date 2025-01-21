'use client';

import { Button } from '@/components/ui/button';
import { Heart, HeartCrack } from 'lucide-react';
import { addDogImageList, reload } from './actions';

export function DeclineButton() {
	return (
		<Button
			variant="outline"
			size="icon"
			className="w-16 h-16 rounded-full border-2 border-blue-300 hover:bg-blue-50"
			onClick={reload}
		>
			<HeartCrack className="w-8 h-8 text-red-500" />
			<span className="sr-only">Like</span>
		</Button>
	);
}

export function LikeButton({ src }: { src: string }) {
	return (
		<Button
			variant="outline"
			size="icon"
			className="w-16 h-16 rounded-full border-2 border-pink-300 hover:bg-pink-50"
			onClick={async () => {
				await addDogImageList(src);
			}}
		>
			<Heart className="w-8 h-8 text-red-500 fill-red-500" />
			<span className="sr-only">Super Like</span>
		</Button>
	);
}
