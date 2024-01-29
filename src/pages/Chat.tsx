import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Send } from 'lucide-react';
import { useState } from 'react';

const dummyData: string[] = ['asdfasdf', 'asdfasdf', 'Asdfasdfasdfasdfads'];

const Chat = () => {
  const [data, setData] = useState<string[]>(dummyData);
  const [chat, setChat] = useState<string>('');

  const onClickSend = () => {
    setData([...data, chat]);
    setChat('');
  };

  return (
    <section className="relative w-full h-full flex items-center justify-center pb-[130px]">
      <div className="w-full h-full md:w-[600px] lg:w-[800px]">
        <h1 className="text-lg font-bold pt-4">Dong Hang</h1>
        <Separator className="mt-4 mb-2" />
        <div className="w-full h-full max-h-full overflow-y-scroll flex flex-col gap-2 px-2">
          {data?.map((item, index) => (
            <div key={index} className="w-full flex justify-end">
              <div className="max-w-[300px] md:max-w-[600px] lg:max-w-[800px] h-[50px] px-4 leading-tight flex items-center rounded-lg bg-slate-800 text-white ">
                {item}
              </div>
            </div>
          ))}
        </div>
        <div className="fixed bottom-4 w-full px-2 md:w-[600px] lg:w-[800px] flex items-center gap-2">
          <Input
            placeholder="Search"
            value={chat}
            onChange={(e) => setChat(e.target.value)}
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
