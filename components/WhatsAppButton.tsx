import { DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/site";
import TrackedAnchor from "@/components/analytics/TrackedAnchor";

export default function WhatsAppButton() {
  return (
    <TrackedAnchor
      kind="whatsapp"
      location="floating_button"
      href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7 fill-white"
      >
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.386.63 4.622 1.734 6.556L4 29l7.62-1.688A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75c-2.02 0-3.902-.58-5.49-1.583l-.393-.246-4.522 1.002 1.024-4.42-.258-.406A9.72 9.72 0 0 1 6.25 15c0-5.386 4.375-9.75 9.754-9.75 5.38 0 9.746 4.364 9.746 9.75s-4.367 9.75-9.746 9.75Zm5.35-7.302c-.293-.147-1.735-.857-2.004-.955-.269-.098-.465-.147-.66.147-.196.293-.758.955-.929 1.152-.171.196-.342.22-.635.073-.293-.147-1.238-.456-2.358-1.454-.872-.778-1.461-1.739-1.632-2.032-.171-.293-.018-.451.129-.598.132-.132.293-.342.44-.514.147-.171.196-.293.293-.489.098-.196.049-.367-.024-.514-.073-.147-.66-1.59-.905-2.178-.238-.572-.48-.494-.66-.503l-.562-.01c-.196 0-.514.073-.783.367-.269.293-1.026 1.002-1.026 2.444s1.05 2.834 1.197 3.03c.147.196 2.067 3.157 5.009 4.427.7.302 1.246.483 1.672.618.702.223 1.34.191 1.845.116.563-.084 1.735-.709 1.98-1.394.244-.685.244-1.271.171-1.394-.073-.122-.269-.196-.562-.343Z" />
      </svg>
    </TrackedAnchor>
  );
}
