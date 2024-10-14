import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ContentTabs({
	question,
	solution,
}: {
	question?: React.ReactNode;
	solution?: React.ReactNode;
}) {
	return (
		<Tabs defaultValue='question' className='flex grow flex-col'>
			<TabsList className='flex items-stretch justify-start rounded-none'>
				<TabsTrigger className='rounded-none' value='question'>
					Question
				</TabsTrigger>
				<TabsTrigger className='rounded-none' value='solution'>
					Solution
				</TabsTrigger>
			</TabsList>
			<TabsContent
				value='question'
				// IMPORTANT FOR ASTRO EXPRESSIVE CODE TO INITIALIZE THE COPY BUTTON PROPERLY
				forceMount
				className='mt-0 flex grow flex-col border-4 border-t-0 border-muted data-[state=inactive]:hidden'
			>
				{question}
			</TabsContent>
			<TabsContent
				value='solution'
				// IMPORTANT FOR ASTRO EXPRESSIVE CODE TO INITIALIZE THE COPY BUTTON PROPERLY
				forceMount
				className='mt-0 flex grow flex-col border-4 border-t-0 border-muted data-[state=inactive]:hidden'
			>
				{solution}
			</TabsContent>
		</Tabs>
	);
}
