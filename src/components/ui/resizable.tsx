import * as React from "react";
import { GripVertical } from "lucide-react";
import * as ResizablePrimitive from "react-resizable-panels";

import { cn } from "@/lib/utils";

const ResizablePanelGroup = React.forwardRef<
  React.ElementRef<typeof ResizablePrimitive.PanelGroup>,
  React.ComponentPropsWithoutRef<typeof ResizablePrimitive.PanelGroup>
>(({ className, ...props }, ref) => (
  <ResizablePrimitive.PanelGroup
    ref={ref}
    className={cn(
      "flex h-full w-full data-[panel-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
));
ResizablePanelGroup.displayName = ResizablePrimitive.PanelGroup.displayName;

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = React.forwardRef<
  React.ElementRef<typeof ResizablePrimitive.PanelResizeHandle>,
  React.ComponentPropsWithoutRef<typeof ResizablePrimitive.PanelResizeHandle> & {
    withHandle?: boolean;
  }
>(({ className, withHandle = false, ...props }, ref) => (
  <ResizablePrimitive.PanelResizeHandle
    ref={ref}
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 after:bg-border data-[panel-direction=vertical]:h-px data-[panel-direction=vertical]:w-full data-[panel-direction=vertical]:flex-col data-[panel-direction=vertical]:after:left-0 data-[panel-direction=vertical]:after:top-1/2 data-[panel-direction=vertical]:after:h-1 data-[panel-direction=vertical]:after:w-full data-[panel-direction=vertical]:after:-translate-y-1/2 data-[panel-direction=vertical]:after:translate-x-0 data-[resize-handle-state=hover]:bg-primary/80 data-[resize-handle-state=hover]:after:bg-primary/80 data-[resize-handle-state=drag]:bg-primary data-[resize-handle-state=drag]:after:bg-primary",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-3.5 w-3.5 touch-none items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
));
ResizableHandle.displayName = ResizablePrimitive.PanelResizeHandle.displayName;

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };