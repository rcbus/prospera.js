const version = '1.0.0';

export default function Version({align}) {
  return (
    <div className={align=="center" ? "version version-center" : align=="left" ? "version version-left" : align=="right" ? "version version-right" : "version version-center"}>
      Versão {version}
    </div>
  )
}

/*
Histórico de versões

1.0.0 - 01/07/2020
*/