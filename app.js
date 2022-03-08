const countdown = () => {
  const endDate = new Date("May 31, 2022 00:00:00").getTime()
  const now = new Date().getTime()

  const difference = endDate - now

  const seconds = 1000
  const minutes = seconds * 60
  const hours = minutes * 60
  const days = hours * 24

  let timeDays = Math.floor(difference / days)
  let timeHours = Math.floor((difference % days) / hours)
  let timeMinutes = Math.floor((difference % hours) / minutes)
  let timeSeconds = Math.floor((difference % minutes) / seconds)
  timeHours = timeHours < 10 ? "0" + timeHours : timeHours
  timeMinutes = timeMinutes < 10 ? "0" + timeHours :timeMinutes
  timeSeconds = timeMinutes < 10 ? "0" + timeMinutes : timeSeconds

  document.getElementById("Days").innerHTML = timeDays
  document.getElementById("Hours").innerHTML = timeHours
  document.getElementById("Minutes").innerHTML = timeMinutes
  document.getElementById("Seconds").innerHTML = timeSeconds
}
setInterval(countdown, 1000)
