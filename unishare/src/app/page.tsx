import Navbar from "@/components/Navbar/Navbar";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen w-screen">
        <ResizablePanelGroup
          direction="horizontal"
          className="max-w-screen rounded-lg border"
        >
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={10}>
                <div className="flex h-full items-center justify-center p-6">
              
                  <Navbar />
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={90}>
                <ResizablePanelGroup direction="horizontal">
                  <ResizablePanel defaultSize={25}>
                    <div className="flex h-full items-center justify-center p-6">
                      <span className="font-semibold">Three</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={90}>
                    <div className="flex h-full items-center justify-center p-6">
                      <span className="font-semibold">Four</span>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={30}>
                    <div className="flex h-full items-center justify-center p-6">
                      <span className="font-semibold">Four</span>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
}
