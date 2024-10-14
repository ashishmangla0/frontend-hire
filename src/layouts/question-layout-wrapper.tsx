import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable';

export default function QuestionLayoutWrapper({
	left,
	right,
}: {
	left?: React.ReactNode;
	right?: React.ReactNode;
}) {
	return (
		<ResizablePanelGroup className='grow' direction='horizontal'>
			<ResizablePanel defaultSize={40} className='flex flex-col'>
				{left}
			</ResizablePanel>
			<ResizableHandle className='w-4 bg-card' withHandle />
			<ResizablePanel defaultSize={60} className='flex flex-col'>
				{right}
			</ResizablePanel>
		</ResizablePanelGroup>
	);
}
