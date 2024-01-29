import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import dayjs from 'dayjs';
import { Send } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

type ChatProps = {
  content: string;
  time: string;
  isMe: boolean;
};

const Chat = () => {
  const [data, setData] = useState<ChatProps[]>(dummyData);
  const [chat, setChat] = useState<string>('');
  const divRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onClickSend = useCallback(() => {
    setData([
      ...data,
      {
        content: chat,
        time: dayjs().format('HH:mm'),
        isMe: true,
      },
    ]);
    setChat('');
  }, [chat, data]);

  useEffect(() => {
    scrollToBottom();
  }, [data]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onClickSend();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClickSend]);

  return (
    <section className="relative w-full h-full flex items-center justify-center pb-[130px]">
      <div className="w-full h-full md:w-[600px] lg:w-[800px]">
        <h1 className="text-lg font-bold pt-4 flex justify-center">
          Dong Hang
        </h1>
        <Separator className="mt-4 mb-2" />
        <div className="w-full h-full max-h-full overflow-y-scroll flex flex-col gap-2 px-2">
          {data?.map((item, index) =>
            item.isMe ? (
              <div key={index} className="w-full flex justify-end gap-2">
                <div className="flex items-end text-sm text-slate-400">
                  {item.time}
                </div>
                <div className="w-max max-w-[330px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px] p-4 leading-tight flex items-center rounded-lg bg-slate-900 text-white ">
                  {item.content}
                </div>
              </div>
            ) : (
              <div className="w-full flex justify-start gap-2">
                <div className="w-max max-w-[330px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[800px] p-4 leading-tight flex items-center rounded-lg bg-slate-600 text-white ">
                  {item.content}
                </div>
                <div className="flex items-end text-sm text-slate-400">
                  {item.time}
                </div>
              </div>
            )
          )}
          <div ref={divRef} />
        </div>
        <div className="fixed bottom-4 w-full px-2 md:w-[600px] lg:w-[800px] flex items-center gap-2">
          <Input
            placeholder="Input your message"
            value={chat}
            onChange={(e) => {
              console.log(e.target.value);
              setChat(e.target.value);
            }}
          />
          <div className="w-10 h-10">
            <Send
              onClick={onClickSend}
              className="p-2 w-full h-full rounded-sm text-secondary bg-slate-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chat;

// dummy data for chat(type should be Chatprops[])
const dummyData = [
  {
    content: 'Hello',
    time: '12:00',
    isMe: true,
  },
  {
    content: 'Hi',
    time: '12:01',
    isMe: false,
  },
  {
    content: 'How are you?',
    time: '12:02',
    isMe: true,
  },
  {
    content: 'I am fine',
    time: '12:03',
    isMe: false,
  },
  {
    content: 'What about you?',
    time: '12:04',
    isMe: false,
  },
  {
    content: 'I am fine too',
    time: '12:05',
    isMe: true,
  },
  {
    content: 'Where are you from?',
    time: '12:06',
    isMe: true,
  },
  {
    content: 'I am from Korea',
    time: '12:07',
    isMe: false,
  },
  {
    content: 'What is your name?',
    time: '12:08',
    isMe: false,
  },
  {
    content: 'My name is Dong Hang',
    time: '12:09',
    isMe: true,
  },
  {
    content: 'Nice to meet you',
    time: '12:10',
    isMe: false,
  },
  {
    content: 'Nice to meet you too',
    time: '12:11',
    isMe: true,
  },
  {
    content: 'Bye',
    time: '12:12',
    isMe: false,
  },
  {
    content: 'Bye',
    time: '12:13',
    isMe: true,
  },
];
