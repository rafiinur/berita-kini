import { createFileRoute } from '@tanstack/react-router'
import Breadcrumbs from '@/components/ui/Breadcrumbs'
import PopularNewsSection from '@/components/shared/PopularNewsSection'
import CommentsSection from '@/components/shared/CommentsSection'
import RelatedNewsSection from '@/components/shared/RelatedNewsSection'
import { DUMMY_NEWS } from '@/constants'

export const Route = createFileRoute('/$category/detail')({
  component: DetailPage,
})

function DetailPage() {
  const { category } = Route.useParams()

  return (
    <main className="min-h-screen">
      <div className="max-w-324 mx-auto flex flex-col py-8 md:py-16 px-5 lg:px-0">
        <Breadcrumbs category={category} />
        <div className="flex flex-col lg:flex-row items-start py-8 md:py-16 gap-10 lg:gap-5.5">
          <div className="max-w-full lg:max-w-213.75 w-full">
            <div className="space-y-6 mb-9">
              <h1 className="font-sora font-semibold text-2xl md:text-4xl text-[#333333] text-pretty">
                Pj. Gubernur Adhy Tekankan Pelayanan Berkualitas saat Sharing
                Session di RSUD Dr. Soetomo
              </h1>
              <div className="flex items-center gap-4">
                <span className="body-small-semibold text-brand capitalized">
                  {category}
                </span>
                <div className="size-1.5 rounded-full bg-[#D9D9D9]"></div>
                <span className="body-small-medium text-[#526071]">
                  22 Jan 2024
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-133.75 w-full">
                <img
                  src="/detail-1.png"
                  alt="Description of image"
                  className="w-full h-full object-center object-cover rounded-2xl"
                />
              </div>
              <span className="body-medium-medium text-[#959EA9]">
                Rumput GBK tidak kunjung bagus, Timnas Indonesia bisa pindah
                kandang. (CNN Indonesia/Adhi Wicaksono)
              </span>
            </div>
            <div className="mt-18">
              <p className="body-medium-medium text-[#526071] text-pretty">
                Jakarta, CNN Indonesia --Ketua Badan Tim Nasional (BTN) PSSI
                Sumardji merespons peluang Timnas Indonesia pindah dari Stadion
                Utama Gelora Bung Karno (GBK) apabila lolos ke putaran ketiga
                Kualifikasi Piala Dunia 2026. Akhir-akhir ini rumput lapangan
                Stadion GBK yang jadi markas Indonesia dalam babak kedua
                Kualifikasi Piala Dunia 2026 kerap bermasalah. Pada pertandingan
                kandang pertama melawan Vietnam, Maret lalu, rumput GBK rusak
                parah. PPKGBK selalu pengelola pun mendapat kritik deras.
              </p>
              <p className="body-medium-medium text-[#526071] text-pretty">
                Acara-acara di luar sepak bola itu kerap membuat kondisi rumput
                tidak sehat dan tidak terlihat bagus saat pertandingan,
                khususnya laga Timnas Indonesia. Sampai saat melawan Irak,
                rumput GBK tidak terlihat sempurna meskipun kondisinya lebih
                bagus dibanding lawan Vietnam. Opsi pindah kandang pun muncul.
              </p>
              <p className="body-medium-medium text-[#526071] text-pretty">
                "Nanti kami akan sampaikan [rencana pindah dari GBK]," ujar
                Sumardji saat ditanya kemungkinan menggunakan stadion lain di
                putaran ketiga kualifikasi. Sumardji tidak membantah kondisi
                rumput GBK yang masih kurang bagus dalam duel Indonesia vs Irak.
                PSSI pun berharap PPKGBK bisa lebih memperhatikan kondisi rumput
                untuk pertandingan Skuad Garuda. "Kami sampai saat ini sudah
                telepon dengan pengelola GBK karena kondisi rumput kemarin
                kurang bagus, kami memohon ke pihak GBK supaya betul-betul
                disiapkan dan diperhatikan kondisi rumput," tutur Sumardji.
                "Kalau dilihat-lihat sepertinya kondisi rumput GBK kayaknya
                stres itu, sehingga dengan kondisi itu akan memengaruhi, tadi
                saya telepon supaya diperhatikan," kata Sumardji menambahkan.
              </p>
            </div>
            <section className="mt-35">
              <CommentsSection />
            </section>
            <section className="mt-35">
              <RelatedNewsSection />
            </section>
          </div>
          <aside className="h-full flex flex-col items-start">
            <PopularNewsSection
              orientation="vertical"
              newsList={DUMMY_NEWS}
              category={category}
            />
          </aside>
        </div>
      </div>
    </main>
  )
}
