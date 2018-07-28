// Type definitions for p5 0.6
// Project: https://github.com/processing/p5.js
// Definitions by: p5-types <https://github.com/p5-types>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

// This file was auto-generated. Please do not edit it.

/// <reference path="./constants.d.ts" />
/// <reference path="./literals.d.ts" />
/// <reference path="./src/color/creating_reading.d.ts" />
/// <reference path="./src/color/setting.d.ts" />
/// <reference path="./src/core/shape/2d_primitives.d.ts" />
/// <reference path="./src/core/shape/attributes.d.ts" />
/// <reference path="./src/core/shape/curves.d.ts" />
/// <reference path="./src/core/shape/vertex.d.ts" />
/// <reference path="./src/core/constants.d.ts" />
/// <reference path="./src/core/environment.d.ts" />
/// <reference path="./src/core/main.d.ts" />
/// <reference path="./src/core/rendering.d.ts" />
/// <reference path="./src/core/structure.d.ts" />
/// <reference path="./src/core/transform.d.ts" />
/// <reference path="./src/data/p5.TypedDict.d.ts" />
/// <reference path="./src/events/acceleration.d.ts" />
/// <reference path="./src/events/keyboard.d.ts" />
/// <reference path="./src/events/mouse.d.ts" />
/// <reference path="./src/events/touch.d.ts" />
/// <reference path="./src/image/image.d.ts" />
/// <reference path="./src/image/loading_displaying.d.ts" />
/// <reference path="./src/image/pixels.d.ts" />
/// <reference path="./src/io/files.d.ts" />
/// <reference path="./src/math/calculation.d.ts" />
/// <reference path="./src/math/math.d.ts" />
/// <reference path="./src/math/noise.d.ts" />
/// <reference path="./src/math/random.d.ts" />
/// <reference path="./src/math/trigonometry.d.ts" />
/// <reference path="./src/typography/attributes.d.ts" />
/// <reference path="./src/typography/loading_displaying.d.ts" />
/// <reference path="./src/utilities/array_functions.d.ts" />
/// <reference path="./src/utilities/conversion.d.ts" />
/// <reference path="./src/utilities/string_functions.d.ts" />
/// <reference path="./src/utilities/time_date.d.ts" />
/// <reference path="./src/webgl/3d_primitives.d.ts" />
/// <reference path="./src/webgl/camera.d.ts" />
/// <reference path="./src/webgl/interaction.d.ts" />
/// <reference path="./src/webgl/light.d.ts" />
/// <reference path="./src/webgl/loading.d.ts" />
/// <reference path="./src/webgl/material.d.ts" />
/// <reference path="./src/webgl/p5.RendererGL.d.ts" />
/// <reference path="./src/color/p5.Color.d.ts" />
/// <reference path="./src/core/p5.Element.d.ts" />
/// <reference path="./src/core/p5.Graphics.d.ts" />
/// <reference path="./src/image/p5.Image.d.ts" />
/// <reference path="./src/io/p5.Table.d.ts" />
/// <reference path="./src/io/p5.TableRow.d.ts" />
/// <reference path="./src/io/p5.XML.d.ts" />
/// <reference path="./src/math/p5.Vector.d.ts" />
/// <reference path="./src/typography/p5.Font.d.ts" />
/// <reference path="./src/webgl/p5.Geometry.d.ts" />
/// <reference path="./src/webgl/p5.Shader.d.ts" />
export = p5;
declare class p5 {
  /**
   *   This is the p5 instance constructor. A p5 instance 
   *   holds all the properties and methods related to a 
   *   p5 sketch. It expects an incoming sketch closure 
   *   and it can also take an optional node parameter 
   *   for attaching the generated p5 canvas to a node. 
   *   The sketch closure takes the newly created p5 
   *   instance as its sole argument and may optionally 
   *   set preload(), setup(), and/or draw() properties 
   *   on it for running a sketch. 
   * 
   *   A p5 sketch can run in "global" or "instance" 
   *   mode: "global" - all properties and methods are 
   *   attached to the window "instance" - all properties 
   *   and methods are bound to this p5 object
   *
   *   @param sketch a closure that can set optional 
   *   preload(), setup(), and/or draw() properties on 
   *   the given p5 instance
   *   @param [node] element to attach canvas to, if a 
   *   boolean is passed in use it as sync
   *   @param [sync] start synchronously (optional)
   *   @return a p5 instance
   */
  constructor(sketch: Function, node?: HTMLElement|boolean, sync?: boolean);
}
declare interface p5 extends p5.p5InstanceExtensions {}

declare namespace p5 {
  type UNKNOWN_P5_CONSTANT = any;
  interface p5InstanceExtensions  {}
  class Color {
  }
  interface Color extends p5.ColorInstanceExtensions {}

  class Element {
  }
  interface Element extends p5.ElementInstanceExtensions {}

  class Graphics {
  }
  interface Graphics extends p5.GraphicsInstanceExtensions {}

  class Renderer {
    /**
     *   Main graphics and rendering context, as well as 
     *   the base API implementation for p5.js "core". To 
     *   be used as the superclass for Renderer2D and 
     *   Renderer3D classes, respecitvely.
     *
     *   @param elt DOM node that is wrapped
     *   @param [pInst] pointer to p5 instance
     *   @param [isMainCanvas] whether we're using it as 
     *   main canvas
     */
    constructor(elt: string, pInst?: p5, isMainCanvas?: boolean);
  }
  interface Renderer extends p5.RendererInstanceExtensions {}

  class TypedDict {
  }
  interface TypedDict extends p5.TypedDictInstanceExtensions {}

  class StringDict {
  }
  interface StringDict extends p5.StringDictInstanceExtensions {}

  class NumberDict {
  }
  interface NumberDict extends p5.NumberDictInstanceExtensions {}

  class Image {
  }
  interface Image extends p5.ImageInstanceExtensions {}

  class PrintWriter {
  }
  interface PrintWriter extends p5.PrintWriterInstanceExtensions {}

  class Table {
    /**
     *   Table objects store data with multiple rows and 
     *   columns, much like in a traditional spreadsheet. 
     *   Tables can be generated from scratch, dynamically, 
     *   or using data from an existing file.
     *
     *   @param [rows] An array of p5.TableRow objects
     */
    constructor(rows?: p5.TableRow[]);
  }
  interface Table extends p5.TableInstanceExtensions {}

  class TableRow {
    /**
     *   A TableRow object represents a single row of data 
     *   values, stored in columns, from a table. A Table 
     *   Row contains both an ordered array, and an 
     *   unordered JSON object.
     *
     *   @param [str] optional: populate the row with a 
     *   string of values, separated by the separator
     *   @param [separator] comma separated values (csv) by 
     *   default
     */
    constructor(str?: string, separator?: string);
  }
  interface TableRow extends p5.TableRowInstanceExtensions {}

  class XML {
    /**
     *   XML is a representation of an XML object, able to 
     *   parse XML code. Use loadXML() to load external XML 
     *   files and create XML objects.
     *
     */
    constructor();
  }
  interface XML extends p5.XMLInstanceExtensions {}

  class Vector {
  }
  interface Vector extends p5.VectorInstanceExtensions {}

  class Font {
  }
  interface Font extends p5.FontInstanceExtensions {}

  class Geometry {
    /**
     *   p5 Geometry class
     *
     *   @param [detailX] number of vertices on horizontal 
     *   surface
     *   @param [detailY] number of vertices on horizontal 
     *   surface
     *   @param [callback] function to call upon object 
     *   instantiation.
     */
    constructor(detailX?: number, detailY?: number, callback?: Function);
  }
  interface Geometry extends p5.GeometryInstanceExtensions {}

  class Shader {
  }
  interface Shader extends p5.ShaderInstanceExtensions {}

  class MediaElement {
    /**
     *   Extends p5.Element to handle audio and video. In 
     *   addition to the methods of p5.Element, it also 
     *   contains methods for controlling media. It is not 
     *   called directly, but p5.MediaElements are created 
     *   by calling createVideo, createAudio, and 
     *   createCapture.
     *
     *   @param elt DOM node that is wrapped
     */
    constructor(elt: string);
  }
  interface MediaElement extends p5.MediaElementInstanceExtensions {}

  class File {
    /**
     *   Base class for a file Using this for 
     *   createFileInput
     *
     *   @param file File that is wrapped
     */
    constructor(file: File);
  }
  interface File extends p5.FileInstanceExtensions {}

  class SoundFile {
    /**
     *   SoundFile object with a path to a file. The 
     *   p5.SoundFile may not be available immediately 
     *   because it loads the file information 
     *   asynchronously. 
     * 
     *   To do something with the sound as soon as it loads 
     *   pass the name of a function as the second 
     *   parameter. 
     * 
     *   Only one file path is required. However, audio 
     *   file formats (i.e. mp3, ogg, wav and m4a/aac) are 
     *   not supported by all web browsers. If you want to 
     *   ensure compatability, instead of a single file 
     *   path, you may include an Array of filepaths, and 
     *   the browser will choose a format that works.
     *
     *   @param path path to a sound file (String). 
     *   Optionally, you may include multiple file formats 
     *   in an array. Alternately, accepts an object from 
     *   the HTML5 File API, or a p5.File.
     *   @param [successCallback] Name of a function to 
     *   call once file loads
     *   @param [errorCallback] Name of a function to call 
     *   if file fails to load. This function will receive 
     *   an error or XMLHttpRequest object with information 
     *   about what went wrong.
     *   @param [whileLoadingCallback] Name of a function 
     *   to call while file is loading. That function will 
     *   receive progress of the request to load the sound 
     *   file (between 0 and 1) as its first parameter. 
     *   This progress does not account for the additional 
     *   time needed to decode the audio data.
     */
    constructor(path: string|any[], successCallback?: Function, errorCallback?: Function, whileLoadingCallback?: Function);
  }
  interface SoundFile extends p5.SoundFileInstanceExtensions {}

  class Amplitude {
    /**
     *   Amplitude measures volume between 0.0 and 1.0. 
     *   Listens to all p5sound by default, or use 
     *   setInput() to listen to a specific sound source. 
     *   Accepts an optional smoothing value, which 
     *   defaults to 0.
     *
     *   @param [smoothing] between 0.0 and .999 to smooth 
     *   amplitude readings (defaults to 0)
     */
    constructor(smoothing?: number);
  }
  interface Amplitude extends p5.AmplitudeInstanceExtensions {}

  class FFT {
    /**
     *   FFT (Fast Fourier Transform) is an analysis 
     *   algorithm that isolates individual  audio 
     *   frequencies within a waveform. Once instantiated, 
     *   a p5.FFT object can return an array based on two 
     *   types of analyses: 
     *  
     *   • FFT.waveform() computes amplitude values along 
     *   the time domain. The array indices correspond to 
     *   samples across a brief moment in time. Each value 
     *   represents amplitude of the waveform at that 
     *   sample of time.
     *  
     *   • FFT.analyze()  computes amplitude values along 
     *   the frequency domain. The array indices correspond 
     *   to frequencies (i.e. pitches), from the lowest to 
     *   the highest that humans can hear. Each value 
     *   represents amplitude at that slice of the 
     *   frequency spectrum. Use with getEnergy() to 
     *   measure amplitude at specific frequencies, or 
     *   within a range of frequencies.  
     * 
     *   FFT analyzes a very short snapshot of sound called 
     *   a sample buffer. It returns an array of amplitude 
     *   measurements, referred to as bins. The array is 
     *   1024 bins long by default. You can change the bin 
     *   array length, but it must be a power of 2 between 
     *   16 and 1024 in order for the FFT algorithm to 
     *   function correctly. The actual size of the FFT 
     *   buffer is twice the number of bins, so given a 
     *   standard sample rate, the buffer is 2048/44100 
     *   seconds long.
     *
     *   @param [smoothing] Smooth results of Freq 
     *   Spectrum. 0.0 < smoothing < 1.0. Defaults to 0.8.
     *   @param [bins] Length of resulting array. Must be a 
     *   power of two between 16 and 1024. Defaults to 
     *   1024.
     */
    constructor(smoothing?: number, bins?: number);
  }
  interface FFT extends p5.FFTInstanceExtensions {}

  class Signal {
    /**
     *   p5.Signal is a constant audio-rate signal used by 
     *   p5.Oscillator and p5.Envelope for modulation math. 
     *   This is necessary because Web Audio is processed 
     *   on a seprate clock. For example, the p5 draw loop 
     *   runs about 60 times per second. But the audio 
     *   clock must process samples 44100 times per second. 
     *   If we want to add a value to each of those 
     *   samples, we can't do it in the draw loop, but we 
     *   can do it by adding a constant-rate audio 
     *   signal.</p. 
     * 
     *   This class mostly functions behind the scenes in 
     *   p5.sound, and returns a Tone.Signal from the 
     *   Tone.js library by Yotam Mann. If you want to work 
     *   directly with audio signals for modular synthesis, 
     *   check out tone.js.
     *
     *   @return A Signal object from the Tone.js library
     */
    constructor();
  }
  interface Signal extends p5.SignalInstanceExtensions {}

  class Oscillator {
    /**
     *   Creates a signal that oscillates between -1.0 and 
     *   1.0. By default, the oscillation takes the form of 
     *   a sinusoidal shape ('sine'). Additional types 
     *   include 'triangle', 'sawtooth' and 'square'. The 
     *   frequency defaults to 440 oscillations per second 
     *   (440Hz, equal to the pitch of an 'A' note). Set 
     *   the type of oscillation with setType(), or by 
     *   instantiating a specific oscillator: p5.SinOsc, 
     *   p5.TriOsc, p5.SqrOsc, or p5.SawOsc.
     *
     *   @param [freq] frequency defaults to 440Hz
     *   @param [type] type of oscillator. Options: 'sine' 
     *   (default), 'triangle', 'sawtooth', 'square'
     */
    constructor(freq?: number, type?: string);
  }
  interface Oscillator extends p5.OscillatorInstanceExtensions {}

  class SinOsc {
    /**
     *   Constructor: new p5.SinOsc(). This creates a Sine 
     *   Wave Oscillator and is equivalent to  new 
     *   p5.Oscillator('sine')  or creating a p5.Oscillator 
     *   and then calling its method setType('sine'). See 
     *   p5.Oscillator for methods.
     *
     *   @param [freq] Set the frequency
     */
    constructor(freq?: number);
  }
  interface SinOsc extends p5.SinOscInstanceExtensions {}

  class TriOsc {
    /**
     *   Constructor: new p5.TriOsc(). This creates a 
     *   Triangle Wave Oscillator and is equivalent to new 
     *   p5.Oscillator('triangle')  or creating a 
     *   p5.Oscillator and then calling its method 
     *   setType('triangle'). See p5.Oscillator for 
     *   methods.
     *
     *   @param [freq] Set the frequency
     */
    constructor(freq?: number);
  }
  interface TriOsc extends p5.TriOscInstanceExtensions {}

  class SawOsc {
    /**
     *   Constructor: new p5.SawOsc(). This creates a 
     *   SawTooth Wave Oscillator and is equivalent to  new 
     *   p5.Oscillator('sawtooth')  or creating a 
     *   p5.Oscillator and then calling its method 
     *   setType('sawtooth'). See p5.Oscillator for 
     *   methods.
     *
     *   @param [freq] Set the frequency
     */
    constructor(freq?: number);
  }
  interface SawOsc extends p5.SawOscInstanceExtensions {}

  class SqrOsc {
    /**
     *   Constructor: new p5.SqrOsc(). This creates a 
     *   Square Wave Oscillator and is equivalent to  new 
     *   p5.Oscillator('square')  or creating a 
     *   p5.Oscillator and then calling its method 
     *   setType('square'). See p5.Oscillator for methods.
     *
     *   @param [freq] Set the frequency
     */
    constructor(freq?: number);
  }
  interface SqrOsc extends p5.SqrOscInstanceExtensions {}

  class Envelope {
    /**
     *   Envelopes are pre-defined amplitude distribution 
     *   over time. Typically, envelopes are used to 
     *   control the output volume of an object, a series 
     *   of fades referred to as Attack, Decay, Sustain and 
     *   Release ( ADSR ). Envelopes can also control other 
     *   Web Audio Parameters—for example, a p5.Envelope 
     *   can control an Oscillator's frequency like this: 
     *   osc.freq(env). Use setRange to change the 
     *   attack/release level. Use setADSR to change 
     *   attackTime, decayTime, sustainPercent and 
     *   releaseTime. 
     * 
     *   Use the play method to play the entire envelope, 
     *   the ramp method for a pingable trigger, or 
     *   triggerAttack/ triggerRelease to trigger 
     *   noteOn/noteOff.
     *
     */
    constructor();
  }
  interface Envelope extends p5.EnvelopeInstanceExtensions {}

  class Pulse {
    /**
     *   Creates a Pulse object, an oscillator that 
     *   implements Pulse Width Modulation. The pulse is 
     *   created with two oscillators. Accepts a parameter 
     *   for frequency, and to set the width between the 
     *   pulses. See  p5.Oscillator for a full list of 
     *   methods.
     *
     *   @param [freq] Frequency in oscillations per second 
     *   (Hz)
     *   @param [w] Width between the pulses (0 to 1.0, 
     *   defaults to 0)
     */
    constructor(freq?: number, w?: number);
  }
  interface Pulse extends p5.PulseInstanceExtensions {}

  class Noise {
    /**
     *   Noise is a type of oscillator that generates a 
     *   buffer with random values.
     *
     *   @param type Type of noise can be 'white' 
     *   (default), 'brown' or 'pink'.
     */
    constructor(type: string);
  }
  interface Noise extends p5.NoiseInstanceExtensions {}

  class AudioIn {
    /**
     *   Get audio from an input, i.e. your computer's 
     *   microphone. Turn the mic on/off with the start() 
     *   and stop() methods. When the mic is on, its volume 
     *   can be measured with getLevel or by connecting an 
     *   FFT object. 
     * 
     *   If you want to hear the AudioIn, use the 
     *   .connect() method. AudioIn does not connect to 
     *   p5.sound output by default to prevent feedback. 
     * 
     *   Note: This uses the getUserMedia/ Stream API, 
     *   which is not supported by certain browsers. Access 
     *   in Chrome browser is limited to localhost and 
     *   https, but access over http may be limited.
     *
     *   @param [errorCallback] A function to call if there 
     *   is an error accessing the AudioIn. For example, 
     *   Safari and iOS devices do not currently allow 
     *   microphone access.
     */
    constructor(errorCallback?: Function);
  }
  interface AudioIn extends p5.AudioInInstanceExtensions {}

  class Effect {
    /**
     *   Effect is a base class for audio effects in p5.  
     *   This module handles the nodes and methods that are 
     *   common and useful for current and future effects. 
     * 
     *   This class is extended by p5.Distortion, 
     *   p5.Compressor, p5.Delay, p5.Filter, p5.Reverb.
     *
     *   @param [ac] Reference to the audio context of the 
     *   p5 object
     *   @param [input] Gain Node effect wrapper
     *   @param [output] Gain Node effect wrapper
     *   @param [_drywet] Tone.JS CrossFade node (defaults 
     *   to value: 1)
     *   @param [wet] Effects that extend this class should 
     *   connect to the wet signal to this gain node, so 
     *   that dry and wet signals are mixed properly.
     */
    constructor(ac?: object, input?: AudioNode, output?: AudioNode, _drywet?: object, wet?: AudioNode);
  }
  interface Effect extends p5.EffectInstanceExtensions {}

  class Filter {
    /**
     *   A p5.Filter uses a Web Audio Biquad Filter to 
     *   filter the frequency response of an input source. 
     *   Subclasses include: 
     * 
     *   - p5.LowPass: Allows frequencies below the cutoff 
     *   frequency to pass through, and attenuates 
     *   frequencies above the cutoff.
     *   - p5.HighPass: The opposite of a lowpass filter. 
     *   - p5.BandPass: Allows a range of frequencies to 
     *   pass through and attenuates the frequencies below 
     *   and above this frequency range. 
     * 
     *   The .res() method controls either width of the 
     *   bandpass, or resonance of the low/highpass cutoff 
     *   frequency. 
     * 
     *   This class extends p5.Effect.
     *   Methods amp(), chain(), drywet(), connect(), and 
     *   disconnect() are available.
     *
     *   @param [type] 'lowpass' (default), 'highpass', 
     *   'bandpass'
     */
    constructor(type?: string);
  }
  interface Filter extends p5.FilterInstanceExtensions {}

  class LowPass {
    /**
     *   Constructor: new p5.LowPass() Filter. This is the 
     *   same as creating a p5.Filter and then calling its 
     *   method setType('lowpass'). See p5.Filter for 
     *   methods.
     *
     */
    constructor();
  }
  interface LowPass extends p5.LowPassInstanceExtensions {}

  class HighPass {
    /**
     *   Constructor: new p5.HighPass() Filter. This is the 
     *   same as creating a p5.Filter and then calling its 
     *   method setType('highpass'). See p5.Filter for 
     *   methods.
     *
     */
    constructor();
  }
  interface HighPass extends p5.HighPassInstanceExtensions {}

  class BandPass {
    /**
     *   Constructor: new p5.BandPass() Filter. This is the 
     *   same as creating a p5.Filter and then calling its 
     *   method setType('bandpass'). See p5.Filter for 
     *   methods.
     *
     */
    constructor();
  }
  interface BandPass extends p5.BandPassInstanceExtensions {}

  class EQ {
    /**
     *   p5.EQ is an audio effect that performs the 
     *   function of a multiband audio equalizer. 
     *   Equalization is used to adjust the balance of 
     *   frequency compoenents of an audio signal. This 
     *   process is commonly used in sound production and 
     *   recording to change the waveform before it reaches 
     *   a sound output device. EQ can also be used as an 
     *   audio effect to create interesting distortions by 
     *   filtering out parts of the spectrum. p5.EQ is 
     *   built using a chain of Web Audio Biquad Filter 
     *   Nodes and can be instantiated with 3 or 8 bands. 
     *   Bands can be added or removed from the EQ by 
     *   directly modifying p5.EQ.bands (the array that 
     *   stores filters). This class extends p5.Effect. 
     *   Methods amp(), chain(), drywet(), connect(), and 
     *   disconnect() are available.
     *
     *   @param [_eqsize] Constructor will accept 3 or 8, 
     *   defaults to 3
     *   @return p5.EQ object
     */
    constructor(_eqsize?: number);
  }
  interface EQ extends p5.EQInstanceExtensions {}

  class Panner3D {
    /**
     *   Panner3D is based on the  Web Audio Spatial Panner 
     *   Node. This panner is a spatial processing node 
     *   that allows audio to be positioned and oriented in 
     *   3D space. The position is relative to an  Audio 
     *   Context Listener, which can be accessed by 
     *   p5.soundOut.audiocontext.listener
     *
     */
    constructor();
  }
  interface Panner3D extends p5.Panner3DInstanceExtensions {}

  class Delay {
    /**
     *   Delay is an echo effect. It processes an existing 
     *   sound source, and outputs a delayed version of 
     *   that sound. The p5.Delay can produce different 
     *   effects depending on the delayTime, feedback, 
     *   filter, and type. In the example below, a feedback 
     *   of 0.5 (the defaul value) will produce a looping 
     *   delay that decreases in volume by 50% each repeat. 
     *   A filter will cut out the high frequencies so that 
     *   the delay does not sound as piercing as the 
     *   original source. This class extends p5.Effect.
     *   Methods amp(), chain(), drywet(), connect(), and 
     *   disconnect() are available.
     *
     */
    constructor();
  }
  interface Delay extends p5.DelayInstanceExtensions {}

  class Reverb {
    /**
     *   Reverb adds depth to a sound through a large 
     *   number of decaying echoes. It creates the 
     *   perception that sound is occurring in a physical 
     *   space. The p5.Reverb has paramters for Time (how 
     *   long does the reverb last) and decayRate (how much 
     *   the sound decays with each echo) that can be set 
     *   with the .set() or .process() methods. The 
     *   p5.Convolver extends p5.Reverb allowing you to 
     *   recreate the sound of actual physical spaces 
     *   through convolution. This class extends p5.Effect. 
     *   Methods amp(), chain(), drywet(), connect(), and 
     *   disconnect() are available.
     *
     */
    constructor();
  }
  interface Reverb extends p5.ReverbInstanceExtensions {}

  class Convolver {
    /**
     *   p5.Convolver extends p5.Reverb. It can emulate the 
     *   sound of real physical spaces through a process 
     *   called  convolution. Convolution multiplies any 
     *   audio input by an "impulse response" to simulate 
     *   the dispersion of sound over time. The impulse 
     *   response is generated from an audio file that you 
     *   provide. One way to generate an impulse response 
     *   is to pop a balloon in a reverberant space and 
     *   record the echo. Convolution can also be used to 
     *   experiment with sound. 
     * 
     *   Use the method createConvolution(path) to 
     *   instantiate a p5.Convolver with a path to your 
     *   impulse response audio file.
     *
     *   @param path path to a sound file
     *   @param [callback] function to call when loading 
     *   succeeds
     *   @param [errorCallback] function to call if loading 
     *   fails. This function will receive an error or 
     *   XMLHttpRequest object with information about what 
     *   went wrong.
     */
    constructor(path: string, callback?: Function, errorCallback?: Function);
  }
  interface Convolver extends p5.ConvolverInstanceExtensions {}

  class Phrase {
    /**
     *   A phrase is a pattern of musical events over time, 
     *   i.e. a series of notes and rests. Phrases must be 
     *   added to a p5.Part for playback, and each part can 
     *   play multiple phrases at the same time. For 
     *   example, one Phrase might be a kick drum, another 
     *   could be a snare, and another could be the 
     *   bassline. 
     * 
     *   The first parameter is a name so that the phrase 
     *   can be modified or deleted later. The callback is 
     *   a a function that this phrase will call at every 
     *   step—for example it might be called 
     *   playNote(value){}. The array determines which 
     *   value is passed into the callback at each step of 
     *   the phrase. It can be numbers, an object with 
     *   multiple numbers, or a zero (0) indicates a rest 
     *   so the callback won't be called).
     *
     *   @param name Name so that you can access the 
     *   Phrase.
     *   @param callback The name of a function that this 
     *   phrase will call. Typically it will play a sound, 
     *   and accept two parameters: a time at which to play 
     *   the sound (in seconds from now), and a value from 
     *   the sequence array. The time should be passed into 
     *   the play() or start() method to ensure precision.
     *   @param sequence Array of values to pass into the 
     *   callback at each step of the phrase.
     */
    constructor(name: string, callback: Function, sequence: any[]);
  }
  interface Phrase extends p5.PhraseInstanceExtensions {}

  class Part {
    /**
     *   A p5.Part plays back one or more p5.Phrases. 
     *   Instantiate a part with steps and tatums. By 
     *   default, each step represents 1/16th note. See 
     *   p5.Phrase for more about musical timing.
     *
     *   @param [steps] Steps in the part
     *   @param [tatums] Divisions of a beat (default is 
     *   1/16, a quarter note)
     */
    constructor(steps?: number, tatums?: number);
  }
  interface Part extends p5.PartInstanceExtensions {}

  class Score {
    /**
     *   A Score consists of a series of Parts. The parts 
     *   will be played back in order. For example, you 
     *   could have an A part, a B part, and a C part, and 
     *   play them back in this order new p5.Score(a, a, b, 
     *   a, c)
     *
     *   @param [parts] One or multiple parts, to be played 
     *   in sequence.
     */
    constructor(parts?: p5.Part);
  }
  interface Score extends p5.ScoreInstanceExtensions {}

  class SoundLoop {
    /**
     *   SoundLoop
     *
     *   @param callback this function will be called on 
     *   each iteration of theloop
     *   @param [interval] amount of time or beats for each 
     *   iteration of the loop defaults to 1
     */
    constructor(callback: Function, interval?: number|string);
  }
  interface SoundLoop extends p5.SoundLoopInstanceExtensions {}

  class Compressor {
    /**
     *   Compressor is an audio effect class that performs 
     *   dynamics compression on an audio input source. 
     *   This is a very commonly used technique in music 
     *   and sound production. Compression creates an 
     *   overall louder, richer, and fuller sound by 
     *   lowering the volume of louds and raising that of 
     *   softs. Compression can be used to avoid clipping 
     *   (sound distortion due to peaks in volume) and is 
     *   especially useful when many sounds are played at 
     *   once. Compression can be used on indivudal sound 
     *   sources in addition to the master output.  This 
     *   class extends p5.Effect.
     *   Methods amp(), chain(), drywet(), connect(), and 
     *   disconnect() are available.
     *
     */
    constructor();
  }
  interface Compressor extends p5.CompressorInstanceExtensions {}

  class SoundRecorder {
    /**
     *   Record sounds for playback and/or to save as a 
     *   .wav file. The p5.SoundRecorder records all sound 
     *   output from your sketch, or can be assigned a 
     *   specific source with setInput(). The record() 
     *   method accepts a p5.SoundFile as a parameter. When 
     *   playback is stopped (either after the given amount 
     *   of time, or with the stop() method), the 
     *   p5.SoundRecorder will send its recording to that 
     *   p5.SoundFile for playback.
     *
     */
    constructor();
  }
  interface SoundRecorder extends p5.SoundRecorderInstanceExtensions {}

  class PeakDetect {
    /**
     *   PeakDetect works in conjunction with p5.FFT to 
     *   look for onsets in some or all of the frequency 
     *   spectrum.   To use p5.PeakDetect, call update in 
     *   the draw loop and pass in a p5.FFT object.  
     * 
     *  
     *   You can listen for a specific part of the 
     *   frequency spectrum by setting the range between 
     *   freq1 and freq2.  
     * 
     *   threshold is the threshold for detecting a peak, 
     *   scaled between 0 and 1. It is logarithmic, so 0.1 
     *   is half as loud as 1.0. 
     * 
     *  
     *   The update method is meant to be run in the draw 
     *   loop, and frames determines how many loops must 
     *   pass before another peak can be detected. For 
     *   example, if the frameRate() = 60, you could detect 
     *   the beat of a 120 beat-per-minute song with this 
     *   equation:  framesPerPeak = 60 / (estimatedBPM / 60 
     *   );  
     * 
     *  
     *   Based on example contribtued by @b2renger, and a 
     *   simple beat detection explanation by a 
     *   href="http://www.airtightinteractive.com/2013/10/making-audio-reactive-visuals/" 
     *   target="_blank"Felix Turner.
     *
     *   @param [freq1] lowFrequency - defaults to 20Hz
     *   @param [freq2] highFrequency - defaults to 20000 
     *   Hz
     *   @param [threshold] Threshold for detecting a beat 
     *   between 0 and 1 scaled logarithmically where 0.1 
     *   is 1/2 the loudness of 1.0. Defaults to 0.35.
     *   @param [framesPerPeak] Defaults to 20.
     */
    constructor(freq1?: number, freq2?: number, threshold?: number, framesPerPeak?: number);
  }
  interface PeakDetect extends p5.PeakDetectInstanceExtensions {}

  class Gain {
    /**
     *   A gain node is usefull to set the relative volume 
     *   of sound. It's typically used to build mixers.
     *
     */
    constructor();
  }
  interface Gain extends p5.GainInstanceExtensions {}

  class AudioVoice {
    /**
     *   Base class for monophonic synthesizers. Any 
     *   extensions of this class should follow the API and 
     *   implement the methods below in order to remain 
     *   compatible with p5.PolySynth();
     *
     */
    constructor();
  }
  interface AudioVoice extends p5.AudioVoiceInstanceExtensions {}

  class MonoSynth {
    /**
     *   A MonoSynth is used as a single voice for sound 
     *   synthesis. This is a class to be used in 
     *   conjunction with the PolySynth class. Custom 
     *   synthetisers should be built inheriting from this 
     *   class.
     *
     */
    constructor();
  }
  interface MonoSynth extends p5.MonoSynthInstanceExtensions {}

  class PolySynth {
    /**
     *   An AudioVoice is used as a single voice for sound 
     *   synthesis. The PolySynth class holds an array of 
     *   AudioVoice, and deals with voices allocations, 
     *   with setting notes to be played, and parameters to 
     *   be set.
     *
     *   @param [synthVoice] A monophonic synth voice 
     *   inheriting the AudioVoice class. Defaults to 
     *   p5.MonoSynth
     *   @param [maxVoices] Number of voices, defaults to 
     *   8;
     */
    constructor(synthVoice?: number, maxVoices?: number);
  }
  interface PolySynth extends p5.PolySynthInstanceExtensions {}

  class Distortion {
    /**
     *   A Distortion effect created with a Waveshaper 
     *   Node, with an approach adapted from Kevin Ennis 
     *   This class extends p5.Effect.
     *   Methods amp(), chain(), drywet(), connect(), and 
     *   disconnect() are available.
     *
     *   @param [amount] Unbounded distortion amount. 
     *   Normal values range from 0-1.
     *   @param [oversample] 'none', '2x', or '4x'.
     */
    constructor(amount?: number, oversample?: string);
  }
  interface Distortion extends p5.DistortionInstanceExtensions {}

  interface ColorInstanceExtensions  {}
  interface ElementInstanceExtensions  {}
  interface GraphicsInstanceExtensions extends p5.Element {}
  interface RendererInstanceExtensions extends p5.Element {}
  interface TypedDictInstanceExtensions  {}
  interface StringDictInstanceExtensions extends p5.TypedDict {}
  interface NumberDictInstanceExtensions extends p5.TypedDict {}
  interface ImageInstanceExtensions  {}
  interface PrintWriterInstanceExtensions  {}
  interface TableInstanceExtensions  {}
  interface TableRowInstanceExtensions  {}
  interface XMLInstanceExtensions  {}
  interface VectorInstanceExtensions  {}
  interface FontInstanceExtensions  {}
  interface GeometryInstanceExtensions  {}
  interface ShaderInstanceExtensions  {}
  interface MediaElementInstanceExtensions  {}
  interface FileInstanceExtensions  {}
  interface SoundFileInstanceExtensions  {}
  interface AmplitudeInstanceExtensions  {}
  interface FFTInstanceExtensions  {}
  interface SignalInstanceExtensions  {}
  interface OscillatorInstanceExtensions  {}
  interface SinOscInstanceExtensions extends p5.Oscillator {}
  interface TriOscInstanceExtensions extends p5.Oscillator {}
  interface SawOscInstanceExtensions extends p5.Oscillator {}
  interface SqrOscInstanceExtensions extends p5.Oscillator {}
  interface EnvelopeInstanceExtensions  {}
  interface PulseInstanceExtensions extends p5.Oscillator {}
  interface NoiseInstanceExtensions extends p5.Oscillator {}
  interface AudioInInstanceExtensions  {}
  interface EffectInstanceExtensions  {}
  interface FilterInstanceExtensions extends p5.Effect {}
  interface LowPassInstanceExtensions extends p5.Filter {}
  interface HighPassInstanceExtensions extends p5.Filter {}
  interface BandPassInstanceExtensions extends p5.Filter {}
  interface EQInstanceExtensions extends p5.Effect {}
  interface Panner3DInstanceExtensions  {}
  interface DelayInstanceExtensions extends p5.Effect {}
  interface ReverbInstanceExtensions extends p5.Effect {}
  interface ConvolverInstanceExtensions extends p5.Effect {}
  interface PhraseInstanceExtensions  {}
  interface PartInstanceExtensions  {}
  interface ScoreInstanceExtensions  {}
  interface SoundLoopInstanceExtensions  {}
  interface CompressorInstanceExtensions extends p5.Effect {}
  interface SoundRecorderInstanceExtensions  {}
  interface PeakDetectInstanceExtensions  {}
  interface GainInstanceExtensions  {}
  interface AudioVoiceInstanceExtensions  {}
  interface MonoSynthInstanceExtensions  {}
  interface PolySynthInstanceExtensions  {}
  interface DistortionInstanceExtensions extends p5.Effect {}
}
