import AnimatedImage from "@/components/AnimatedImage";
import UserLocation from "@/components/UserLocation";

export default function Polizas() {
  return (
    <div className="flex flex-col p-3 ">
      <div className="min-h-screen container mx-auto flex flex-col md:flex-row items-center">
        {/* Texto na esquerda */}
        <div className="flex-1 text-center md:text-left md:pr-8">
          <h1 className="text-6xl font-bold">Pólizas</h1>
          <p className="mt-4 font-bold text-[#BE0F0F]">
            Ofrecemos varios tipos de seguros adaptados a sus necesidades:
          </p>
          <p className="mt-4 text-300">
            - <strong>Seguro completo vehicular:</strong> Cobertura total para
            su vehículo.
            <br />- <strong>Seguro contra terceros:</strong> Protección básica
            en accidentes.
            <br />- <strong>Seguro de vida:</strong> Seguridad financiera para
            su familia.
            <br />- <strong>Seguro VIP:</strong> Beneficios exclusivos y
            cobertura ampliada.
          </p>
        </div>

        <AnimatedImage src="/assets/insurance.svg" />
      </div>

      <div className="min-h-screen container mx-auto flex flex-col md:flex-row items-center mt-[50%] md:mt-0">
        {/* Texto na esquerda */}
        <div className="flex-1 text-center md:text-left md:pr-8">
          <h1 className="text-6xl font-bold">Seguro Completo Vehicular</h1>
          <p className="mt-4 font-bold text-[#BE0F0F]">
            Cobertura total para su vehículo
          </p>
          <p className="mt-4 text-300">
            El seguro completo vehicular ofrece la máxima protección para su
            automóvil, brindando cobertura ante daños propios, robos, incendios,
            desastres naturales y accidentes de tránsito. Además, incluye
            asistencia en carretera, servicio de grúa y vehículo de reemplazo en
            caso de siniestro. Esta póliza cubre tanto los daños ocasionados a
            su vehículo como los causados a terceros, garantizando tranquilidad
            ante cualquier imprevisto. También contempla protección contra
            vandalismo, fenómenos meteorológicos extremos y actos de terceros
            que puedan afectar su automóvil. Es la opción ideal para quienes
            desean una cobertura integral, sin preocupaciones.
          </p>
        </div>

        <AnimatedImage src="/assets/segurocompletovehicular.svg" />
      </div>
      <div className="min-h-screen container mx-auto flex flex-col md:flex-row items-center mt-[50%] md:mt-0">
        {/* Texto na esquerda */}
        <div className="flex-1 text-center md:text-left md:pr-8">
          <h1 className="text-6xl font-bold">
            Seguro Contra Terceros Veicular
          </h1>
          <p className="mt-4 font-bold text-[#BE0F0F]">
            Protección básica en accidentes
          </p>
          <p className="mt-4 text-300">
            El seguro contra terceros es una alternativa más económica que
            protege al asegurado ante los daños que pueda ocasionar a otros
            conductores, pasajeros o peatones en un accidente. Cubre
            responsabilidad civil, costos médicos para terceros y reparación de
            vehículos afectados. Aunque no incluye daños al propio automóvil,
            brinda respaldo financiero y legal en caso de siniestro, evitando
            gastos imprevistos. Es una opción ideal para quienes buscan cumplir
            con los requisitos legales de aseguramiento y al mismo tiempo tener
            una cobertura básica que ayude a enfrentar situaciones inesperadas
            sin afectar su economía.
          </p>
        </div>

        <AnimatedImage src="/assets/segurotercerosvehicular.svg" />
      </div>
      <div className="min-h-screen container mx-auto flex flex-col md:flex-row items-center mt-[20%] md:mt-0">
        {/* Texto na esquerda */}
        <div className="flex-1 text-center md:text-left md:pr-8">
          <h1 className="text-6xl font-bold">Seguro de Vida</h1>
          <p className="mt-4 font-bold text-[#BE0F0F]">
            Seguridad financiera para su familia
          </p>
          <p className="mt-4 text-300">
            El seguro de vida es una herramienta esencial para proteger el
            bienestar de sus seres queridos en caso de fallecimiento o
            invalidez. Esta póliza garantiza una indemnización a los
            beneficiarios designados, ayudando a cubrir gastos funerarios,
            deudas pendientes y el sustento familiar. Además, existen planes con
            beneficios en vida, como cobertura en casos de enfermedades graves o
            incapacidad permanente. Algunos planes permiten la acumulación de
            ahorros, asegurando un respaldo económico a futuro. Es una inversión
            en tranquilidad y estabilidad para quienes dependen de usted,
            asegurando su bienestar ante cualquier eventualidad.
          </p>
        </div>

        <AnimatedImage src="/assets/segurovida.svg" />
      </div>

      <div className="min-h-screen container mx-auto flex flex-col md:flex-row items-center mt-[50%] md:mt-0">
        {/* Texto na esquerda */}
        <div className="flex-1 text-center md:text-left md:pr-8">
          <h1 className="text-6xl font-bold">Seguro VIP</h1>
          <p className="mt-4 font-bold text-[#BE0F0F]">
            Beneficios exclusivos y cobertura ampliada
          </p>
          <p className="mt-4 text-300">
            El seguro VIP está diseñado para quienes buscan una cobertura
            exclusiva y personalizada. Ofrece protección ampliada, asistencia
            premium y una respuesta rápida en caso de siniestro. Incluye
            atención prioritaria, vehículo de reemplazo sin límite de días,
            indemnización inmediata y coberturas adicionales como protección en
            el extranjero. Además, brinda acceso a servicios exclusivos como
            asesoría legal especializada y atención médica preferencial. Este
            seguro es ideal para personas que desean la máxima seguridad y
            comodidad, sin preocuparse por trámites o demoras en la atención.
            Con este plan, usted y su familia pueden disfrutar de una protección
            superior con beneficios únicos.
          </p>
        </div>

        <AnimatedImage src="/assets/vip.svg" />
      </div>
    </div>
  );
}
