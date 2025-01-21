import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { loadDogImage } from './actions';
import { DeclineButton, LikeButton } from './Buttons';

export async function DogCard() {
	const src = await loadDogImage();

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
			<Card className="w-full max-w-md bg-white shadow-xl">
				<CardHeader className="relative p-0">
					<div className="relative aspect-square w-full overflow-hidden">
						<Image
							src={src}
							fill
							alt="A cute black and white dog"
							className="object-cover"
							priority
						/>
					</div>
				</CardHeader>
				<CardContent className="p-6 text-center">
					<h2 className="text-xl mb-8 font-medium">
						Do You
						{' '}
						<span role="img" aria-label="heart" className="text-red-500">
							❤️
						</span>
						{' '}
						This
						{' '}
						<span role="img" aria-label="dog">
							🐕
						</span>
						?
					</h2>
					<div className="flex justify-center gap-4">
						<DeclineButton />
						<LikeButton src={src} />
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
